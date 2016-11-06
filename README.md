# [Learn Chinese](http://www.learnchinese.ml)
Simple game to learn how to form Chinese words

The project utilises a python web crawler to get our database of questions.
The sentences are obtained by crawling [mojim](www.mojim.com) daily.
New sentences are then added to our database.
The sentences are then extracted and obfuscated to produce questions.
Users then simply pick correct words that fit into sentences or phrases presented to them.
The sentences care basically song lyrics that we have crawled from mojim.com

The game is hosted on our [www.learnchinese.ml](www.learnchinese.ml). However, in order to access the game, you must be connected to the National University of Singapore School of Computing's network (remote access possible via SoC VPN). 

Source code is available on the [GitHub page](https://github.com/vhazali/Learn-Chinese)

# Structure
The project is split into its front end, back end as well as the crawler.
The crawler is a standalone python script. The script will be run daily by the server to renew the database. 
The front end contains all the code pertaining to how the interface for the game will look to the users. It will be a php file, and utilizes jQuery to communicate with the server to pull questions.
The back end handles all the server side logic for the game. This involve pulling phrases or words from the database and turning them into questions.

# Dependencies

There are some dependencies involved in this project.
For the front end, we have bootstrap as well as jquery. Both have been included into the repository. As for the dependencies that are not included, we have included instructions on how to obtain them.

#### Python
As the backend and crawling are performed by python scripts, the webserver must support python. The version used for development was 2.7.12
#### [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
The crawler utilises Beautiful Soup 4 to perform the http parsing. To download or install Beautiful Soup 4, please proceed to [their documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) site for instructions.

# Runing the game
On the backend, we have uploaded a script learn.sh. Run this script to perform the crawling and question generation.
Then, to play the game, you would need a server that can handle php as well as jQuery requests.