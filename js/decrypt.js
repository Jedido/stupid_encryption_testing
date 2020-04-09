(function() {
  "use strict";

  let id = x => document.getElementById(x);
  let qs = x => document.querySelector(x);

  function init() {
    id("submit").addEventListener("click", decrypt);
  }

  function decrypt() {
    let res = "";
    let cipher = id("message").value.trim();
    let n = enc_key.split(".")[1];
    let counter = 0;
    for (let num of cipher.split(" ")) {
      let decipher = eMod(parseInt(num), dec_key, n) - counter;
      let c3 = decipher % 97;
      let c2 = decipher / 97 % 97;
      let c1 = decipher / 97 / 97;
      res += String.fromCharCode(c1 + 31) + String.fromCharCode(c2 + 31) + String.fromCharCode(c3 + 31);
      counter+=3;
    }
    id("output").innerText = res;
  }

  window.addEventListener("load", init);
})();
