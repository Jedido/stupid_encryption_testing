(function() {
  "use strict";

  let id = x => document.getElementById(x);
  let qs = x => document.querySelector(x);

  function init() {
    id("submit").addEventListener("click", generateKey);
    id("clear").addEventListener("click", clear);
  }

  function generateKey() {
    let user = id("username").value;
    let pass1 = id("password").value;
    let pass2 = id("confirm").value;
    if (user && pass1 && pass2) {
      id("output").innerText = generatePublicKey(user, pass1);
    } else {
      id("output").innerText = "Please fill out all fields.";
    }
  }

  function clear() {
    document.cookie = "";
    id("enc_key").innerText = "";
  }

  function generatePublicKey(user, pass) {
    let keys = getKeys(user, pass);
    if (typeof(keys) == "string") {
      return "An error has occurred. Please try a different username/password combination.";
    }
    let res = keys[1] + "." + keys[2];
    id("enc_key").innerText = res;
    document.cookie = "enc_key=" + res + ";path=/";
    document.cookie = "dec_key=" + keys[0] + ";path=/";
    return res;
  }

  window.addEventListener("load", init);
})();
