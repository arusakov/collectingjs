/* global COLLECTINGJS */

(function (COLLECTINGJS, window) {

  COLLECTINGJS.devinfo = function devinfo() {
    var navigator = window.navigator;
    var screen = window.screen;
    var plugins = navigator.plugins || [];
    var navigatorProps = 'cookieEnabled cpuClass language oscpu platform userAgent vendor'.split(' ');
    var screenProps = 'colorDepth height pixelDepth width'.split(' ');
    var activeXnames = 'AcroPDF.PDF_Adodb.Stream_AgControl.AgControl_DevalVRXCtrl.DevalVRXCtrl.1_' +
      'MacromediaFlashPaper.MacromediaFlashPaper_Msxml2.DOMDocument_Msxml2.XMLHTTP_PDF.PdfCtrl_' +
      'QuickTime.QuickTime_QuickTimeCheckObject.QuickTimeCheck.1_' +
      'RealPlayer_RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)_' +
      'RealVideo.RealVideo(tm) ActiveX Control (32-bit)_' +
      'rmocx.RealPlayer G2 Control_Scripting.Dictionary_Shell.UIHelper_' +
      'ShockwaveFlash.ShockwaveFlash_SWCtl.SWCtl_TDCCtl.TDCCtl_WMPlayer.OCX'.split('_');

    var device = {
      dpr: window.devicePixelRatio || (screen.deviceXDPI / screen.logicalXDPI) || 1,
      plugins: [],
      tzo: new Date().getTimezoneOffset()
    };

    var i, plugin;

    try {
      device.java = navigator.javaEnabled();
    } catch (err) {

    }

    for (i = screenProps.length; i--;) {
      device[screenProps[i]] = screen[screenProps[i]];
    }
    for (i = navigatorProps.length; i--;) {
      device[navigatorProps[i]] = navigator[navigatorProps[i]];
    }

    if (window.ActiveXObject && !plugins.length) {
      for (i = activeXnames.length; i--;) {
        try {
          plugin = activeXnames[i];
          new ActiveXObject(plugin);
          plugins.push(plugin);
        } catch(err) {

        }
      }
    } else {
      for (i = plugins.length; i--;) {
        device.plugins[i] = plugins[i].name;
      }
    }

    return COLLECTINGJS.stringify(device);
  };
})(COLLECTINGJS, window);
