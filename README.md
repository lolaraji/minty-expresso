# Installation #
## Dependencies ##
In order to install minty-expresso, you'll need to have NodeJS installed. You can get it completely for free here:
  * https://nodejs.org/en/

Once you've installed NodeJS, you'll need to install express & nodemon using the following terminal commands:

``` javascript:
npm install express
```

``` javascript:
npm install nodemon
```

## Install the Package ##

After the required dependencies have been installed, you'll need to install minty-expresso using the following terminal command:

``` javascript:
npm install minty-expresso
```

# Guide #
## Functions ##

``` javascript:
const me = require('minty-expresso')
```
* Require the minty-expresso package from the npmjs registry and set a simple acronym to it (it's much easier this way, however it's not unnecessary). *

``` javascript:
me.newPort('/', __dirname + '/index.html', 3000, 'running')
```

* Specify the address the file will be displayed as in the web browser, locate the directory of the file that will be displayed in the address specified before. Include the port, I used *:3000. Set the string that will be logged to the terminal whenever the file is up and running. I chose a modest 'running'.


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
