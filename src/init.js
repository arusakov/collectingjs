var COLLECTINGJS = {
  v: '0.1.2',
  stringify: (window.JSON || {}).stringify || function (obj) {
    // arusakov
    // simple pollyfill from MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON
    // with some modifications
    var output = [], undef = void 0;
    if (obj instanceof Object) {

      if (obj.constructor === Array) {
        for (var nId = 0; nId < obj.length; nId++) {
          output.push(COLLECTINGJS.stringify(obj[nId]));
        }
        return '[' + output + ']';
      }
      if (obj.toString !== Object.prototype.toString) {
        return '"' + obj.toString().replace(/"/g, '\\$&') + '"';
      }
      for (var k in obj) {
        if (obj.hasOwnProperty(k) && obj[k] !== undef) {
          output.push('"' + k.replace(/"/g, '\\$&') + '":' + COLLECTINGJS.stringify(obj[k]));
        }
      }
      return '{' + output + '}';
    }
    if (obj === undef) {
      return 'null';
    }
    return typeof obj === 'string' ? '"' + obj.replace(/"/g, '\\$&') + '"' : obj + '';
  }
};
