# Learn Chinese
Simple game to learn how to form Chinese words

The project utilises a java web crawler to get our database of questions.
The words are obtained by crawling [Weibo](www.weibo.com) daily.
New words are then added to our database.
The words are then extracted and obfuscated to produce questions.
Users then simply pick correct words that fit into sentences or phrases presented to them.

# Structure
The project is split into its front end, back end as well as the crawler.
The crawler is a standalone java app. The app will be run daily by the server to renew the database. 
The front end contains all the code pertaining to how the interface for the game will look to the users.
The back end handles all the server side logic for the game. This involve pulling phrases or words from the database and turning them into questions.

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
