import sys
import urllib
from bs4 import BeautifulSoup, SoupStrainer
import Queue
import re
import time
import json
import threading

url_queue = Queue.Queue()
seen_url = {}
sentences = {}
URL_LIMIT = 10

if len(sys.argv) == 2:
    URL_LIMIT = int(sys.argv[1])
    print "Limit set to: ", URL_LIMIT
else:
    print "Limit not set. Using default of 10 urls."

def has_reached_limit():
    if len(seen_url) >= URL_LIMIT:
        return True
    return False

def add_if_not_seen( url ):
    lock = threading.RLock()
    lock.acquire()
    try:
        if has_reached_limit():
            return
        if not seen_url.has_key(url):
            seen_url[url] = None
            url_queue.put(url)
    finally:
        lock.release()

def get_html_from_url ( url ):
    handle = urllib.urlopen(url)
    html_text =  handle.read()
    return html_text

def determine_html_page_type ( url ):
    parts = url.split("/cn")
    if len(parts) < 2:
        return 'drop'
    if parts[1][0] == 'h':
        return 'singer'
    elif parts[1][0] == 'y':
        return 'song'
    elif parts[1][0] == 'z':
        return 'singers'
    else :
        # Not what we're interested in
        return 'drop'

def parse_lyrics_page ( lyrics ):
    for sentence in lyrics:
        if len(sentence) < 5:
            continue
        if u"\uFF1A" in sentence:
            continue
        if ".com" in sentence:
            continue
        if "-" in sentence:
            continue
        if ":" in sentence:
            continue
        if u"\uFF08" in sentence:
            continue
        if re.search('[a-zA-Z]',sentence):
            continue
        sentences[sentence] = None;

def parse_html_page( html_text, page_type ):
    # Check if we should crawl or scrape content
    if page_type == 'singers':
        # Since it's a page of all singers, get links to other singers
        soup = BeautifulSoup(html_text, "html.parser", parse_only=SoupStrainer('a'))
        for link in soup:
            if link.has_attr('href'):
                link_type = determine_html_page_type (link['href'])
                if link_type == 'singer':
                    add_if_not_seen("https://mojim.com" + link['href'])
                if link_type == 'singers':
                    add_if_not_seen("https://mojim.com" + link['href'])

    elif page_type == "singer":
        # Since it's singer page, get all links to other songs
        soup = BeautifulSoup(html_text, "html.parser", parse_only=SoupStrainer('a'))
        for link in soup:
            if link.has_attr('href'):
                link_type = determine_html_page_type (link['href'])
                if link_type == 'song':
                    add_if_not_seen("https://mojim.com" + link['href'])
                
    elif page_type == "song":
        # Since it's song page, get all lyrics
        soup = BeautifulSoup(html_text, "html.parser")
        lyrics = soup.find(id="fsZx3")
        parse_lyrics_page(lyrics)

def write_sentences_to_json():
    # Dictionary to represent the output json file
    count = len(sentences)
    date = time.strftime("%d %m %Y")
    output_json = {
        "count":count,
        "date extracted":date,
        "sentences":sentences
    }
    output_file = "crawled-sentences.json"
    json_string = json.dumps(output_json, ensure_ascii=False).encode('utf8')
    outfile = open(output_file,"w+")
    outfile.write(json_string)
    outfile.close()

def process_url():
    current_url = url_queue.get()
    print "current url : ", current_url
    page_type = determine_html_page_type(current_url)
    current_html = get_html_from_url(current_url)
    parse_html_page(current_html, page_type)

def start_spider():
    # Seed urls
    # Singers page
    # add_if_not_seen("https://mojim.com/cnza1.htm")
    # Singer pages
    add_if_not_seen("https://mojim.com/cnh100092.htm")
    add_if_not_seen("https://mojim.com/cnh102201.htm")
    add_if_not_seen("https://mojim.com/cnh104775.htm")
    add_if_not_seen("https://mojim.com/cnh100091.htm")
    add_if_not_seen("https://mojim.com/cnh101117.htm")
    add_if_not_seen("https://mojim.com/cnh109372.htm")
    add_if_not_seen("https://mojim.com/cnh100951.htm")
    # add_if_not_seen("https://mojim.com/cnh100015.htm")
    # add_if_not_seen("https://mojim.com/cnh102386.htm")
    # Song pages
    add_if_not_seen("https://mojim.com/cny102520x28x4.htm")
    add_if_not_seen("https://mojim.com/cny100092x55x12.htm")
    add_if_not_seen("https://mojim.com/cny102201x3x1.htm")
    add_if_not_seen("https://mojim.com/cny102201x2x1.htm")
    thread_list=[]
    while not url_queue.empty():
        for i in (1,10):
            print "spawning thread"
            t = threading.Thread(target=process_url)
            t.start()
            thread_list.append(t)
        # process_url()
        print "joining..."
        for thread in thread_list:
            thread.join()

    print "number of questions: ", len(sentences) 
    write_sentences_to_json()

start_spider()