(function() {
  "use strict";

  function init() {
    id("submit").addEventListener("click", login);
    id("clear").addEventListener("click", clear);
  }

  function clear() {
    document.cookie = "";
    id("enc_key").innerText = "";
  }

  function login() {
    let user = id("username").value;
    let pass = id("password").value;
    if (user && pass) {
      let url = "stupid_encryption_testing/data/passwords.json";
      fetch(url)
        .then(checkStatus)
        .then(JSON.parse)
        .then(successFunction)
        .catch(console.log);
    } else {
      id("output").innerText = "Please fill out all fields.";
    }
  }

  function successFunction(responseData) {
    let user = id("username").value;
    let pass = id("password").value;
    let keys = getKeys(user, pass);
    document.cookie = "enc_key=" + res + ";path=/";
    document.cookie = "dec_key=" + keys[0] + ";path=/";
    if (responseData[("" + user.hashCode()).hashCode()] == ("" + pass.hashCode()).hashCode()) {
      console.log("success");
    } else {
      console.log("failure");
    }
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status === 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  window.addEventListener("load", init);
})();
