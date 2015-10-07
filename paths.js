var PATH_PROJECT_ROOT = __dirname;
var PATH_SRC = PATH_PROJECT_ROOT + '/src';
var PATH_DIST = PATH_PROJECT_ROOT + '/dist';
var PATH_BUILD = PATH_PROJECT_ROOT + '/build';

module.exports = {
  PATH_BUILD: PATH_BUILD,
  PATH_DIST: PATH_DIST,
  PATH_PROJECT_ROOT: PATH_PROJECT_ROOT,
  PATH_SRC: PATH_SRC,
  SRC: [
    PATH_SRC + '/init.js',
    PATH_SRC + '/events.js',
    PATH_SRC + '/devinfo.js'
  ]
};
