describe('COLLECTINGJS.devinfo()', function () {
  var navigator = window.navigator;
  var screen = window.screen;

  function plugins() {
    var arr = [];
    var plgns = navigator.plugins;

    for (var i = plgns.length; i--;) {
      arr[i] = plgns[i].name;
    }

    return arr;
  }

  it('simple', function () {
    var devinfo = {
      dpr: window.devicePixelRatio,
      tzo: new Date().getTimezoneOffset(),

      java: navigator.javaEnabled(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      plugins: plugins(),
      platform: navigator.platform,
      vendor: navigator.vendor,
      cookieEnabled: navigator.cookieEnabled,

      width: screen.width,
      height: screen.height,
      pixelDepth: screen.pixelDepth,
      colorDepth: screen.colorDepth
    };
    if (navigator.cpuClass) {
      devinfo.cpuClass = navigator.cpuClass;
    }
    if (navigator.oscpu) {
      devinfo.oscpu = navigator.oscpu;
    }

    expect(JSON.parse(COLLECTINGJS.devinfo())).toEqual(devinfo);
  })
});