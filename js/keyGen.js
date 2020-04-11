(function() {
  "use strict";

  function init() {
    id("register").addEventListener("click", generateKey);
  }

  function generateKey() {
    let user = id("username").value;
    let pass = id("password").value;
    let output = id("output");
    if (user && pass) {
      output.innerText = "";
      output.innerText += "Adding user " + user.doubleHash();
      output.innerText += " With password " + pass.doubleHash();
    } else {
      output.innerText = "Please fill out all fields.";
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
