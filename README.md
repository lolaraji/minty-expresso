# Overview #
## Installation ##
In order to install Minty Expresso, you'll need to have NodeJS installed. You can get it completely for free here:
  * https://nodejs.org/en/

Once you've installed NodeJS, you'll need to install express, nodemon, and minty-expresso using the following terminal command:

``` javascript
npm install minty-expresso
```
Depending on the speed of your computer and internet connection, this will take some time.

## Functions ##

``` javascript
const mintyExpresso = require('minty-expresso')
```
* Require the minty-expresso package from the npmjs registry and set its value to a constant variable. *

``` javascript
mintyExpresso.newAddress('/', __dirname + '/static/index.html')
```

* Specify the location of the file (as seen in the browser's address bar) and enter the directory of the actual file as relative to the directory the terminal is in.

``` javascript
mintyExpresso.newPort(3000, 'running!')
```

* Finally, start the server on whatever port you'd like, and enter a message to be console.logged once it is up and running!

## Links ##

* Original express.js package: https://www.npmjs.com/package/express
* Nodemon package: https://www.npmjs.com/package/nodemon
* Lola Raji's  Website: https://www.lolarajiweb.design/
* minty-expresso NPM page: https://www.npmjs.com/package/minty-expresso

## Credits ##
* Express

    * Contributors: https://github.com/expressjs/express/graphs/contributors/

* Nodemon

    * Contributors: https://github.com/remy/nodemon/graphs/contributors/

* Minty Expresso

    * Contributor: https://github.com/lolaraji/
