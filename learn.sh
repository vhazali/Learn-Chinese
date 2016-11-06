#!/bin/bash
echo "Welcome to Learn Chinese."
echo "Please ensure that you have installed beautifulsoup for python"
echo "If you have not, hit ctrl-c and install beautifulsoup using the commands: "
echo "pip install beautifulsoup4"
sleep 5
echo "Crawling..."
set -e

limit=$1
cd ./Crawler
if [[ -n "$limit" ]]; then
    python crawler.py $limit
else
    python crawler.py
fi
echo "Generating questions..."
cd ../Backend
python make_questions.py ../Crawler/crawled-sentences.json
echo "Ready! To play the game, please run the index.php file"