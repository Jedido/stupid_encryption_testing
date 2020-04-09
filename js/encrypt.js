(function() {
  "use strict";

  let id = x => document.getElementById(x);
  let qs = x => document.querySelector(x);

  function init() {
    id("submit").addEventListener("click", encrypt);
  }

  function encrypt() {
    let message = id("message").value;
    let key_N = id("key").value.split(".");
    let key = key_N[0];
    let n = key_N[1];
    let res = "";
    while (message.length % 3 != 0) {
      message += " ";
    }
    for (let counter = 0; counter < message.length; counter+=3) {
      let num = (message.charCodeAt(counter) - 31) * 97;
      num += message.charCodeAt(counter + 1) - 31;
      num *= 97;
      num += message.charCodeAt(counter + 2) - 31;
      res += eMod(num + counter, key, n) + " ";
    }
    id("output").innerText = res;
  }

  window.addEventListener("load", init);
})();
