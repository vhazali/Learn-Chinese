# Learn Chinese
Simple game to learn how to form Chinese words

The project utilises a java web crawler to get our database of questions.
The words are obtained by crawling [Weibo](www.weibo.com) daily.
New words are then added to our database.
The words are then extracted and obfuscated to produce questions.
Users then simply pick correct words that fit into sentences or phrases presented to them.

# Dependencies
We have some libraries that we are dependent upon. 
The required jars have been included in the repository.
The following is the list of dependencies.

#### Apache HTTPComponents
Used for connecting to the websites
If there are issues with the jars provided in the repo, you may get the latest version [here](https://hc.apache.org/downloads.cgi).

#### JSoup
Used to manipulate the HTTP pages that we have crawled
If there are issues with the jars provided in the repo, you may get the latest version [here](https://jsoup.org/download).

#### dom4J
Used to parse the HTTP pages that we have crawled
If there are issues with the jars provided in the repo, you may get the latest version [here](https://github.com/dom4j/dom4j/releases).
