Requirements
------------

[![Greenkeeper badge](https://badges.greenkeeper.io/arusakov/collectingjs.svg)](https://greenkeeper.io/)
* NodeJS + npm
* npm global packages: gulp

Installation
------------
* npm i

Build for production
--------------------
* gulp

Development
-----------
* gulp dev - watch and build scripts
* gulp karma - run unit tests in PhantomJS (default), Chrome, Firefox

API
------------
* window.COLLECTINGJS -  one global object
* COLLECTINGJS.watch(elementId: String) - collect events on element with elementId
* COLLECTINGJS.events() - get events data as string (serialized JSON)
* COLLECTINGJS.devinfo() - get system data as string (serialized JSON)
