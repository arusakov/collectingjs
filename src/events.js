/* global COLLECTINGJS */

(function (COLLECTINGJS) {
  var eventsStore = {};

  function keyevent(byElement, eventName) {
    byElement.e.push([
      eventName,
      new Date().getTime() - byElement.t
    ]);
  }

  COLLECTINGJS.watch = function watch(elementId) {
    if (!eventsStore.hasOwnProperty(elementId)) {
      eventsStore[elementId] = {
        e: [],
        t: new Date().getTime()
      };

      var e = document.getElementById(elementId);
      var events = 'change focus keypress keyup mouseover'.split(' ');
      for (var i = 0; i < events.length; ++i) {
        e['on' + events[i]] = function (e) {
          keyevent(eventsStore[elementId], (e || window.event /* for IE < 9 */).type);
        };
      }
    }
  };

  COLLECTINGJS.events = function result() {
    return COLLECTINGJS.stringify(eventsStore);
  };

})(COLLECTINGJS);
