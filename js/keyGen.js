(function() {
  "use strict";

  let id = x => document.getElementById(x);
  let qs = x => document.querySelector(x);

  function init() {
    id("register").addEventListener("click", generateKey);
  }

  function generateKey() {
    let user = id("username").value;
    let pass = id("password").value;
    if (user && pass) {
      id("output").innerText = generatePublicKey(user, pass1);
    } else {
      id("output").innerText = "Please fill out all fields.";
    }
  }

  function generatePublicKey(user, pass) {
    let keys = getKeys(user, pass);
    if (typeof(keys) == "string") {
      return "An error has occurred. Please try a different username/password combination.";
    }
    let res = keys[1] + "." + keys[2];
    id("enc_key").innerText = res;
    return res;
  }

  window.addEventListener("load", init);
})();
