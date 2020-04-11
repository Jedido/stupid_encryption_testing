var enc_key;
var dec_key;
var id = x => document.getElementById(x);
var qs = x => document.querySelector(x);

(function() {
  "use strict";

  function init() {
    enc_key = getCookie("enc_key");
    dec_key = getCookie("dec_key");
    id("enc_key").innerText = enc_key;
    /*
    if (!enc_key) {
      window.location.href = "login.html";
    }
    */
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
