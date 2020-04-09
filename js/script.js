(function() {
  "use strict";

  let id = x => document.getElementById(x);
  let qs = x => document.querySelector(x);
  var enc_key;
  var dec_key;

  function init() {
    enc_key = getCookie("enc_key");
    dec_key = getCookie("dec_key");
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  window.addEventListener("load", init);
})();
