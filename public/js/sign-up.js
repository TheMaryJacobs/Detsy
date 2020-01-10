const setUpShopBtnEl = document.getElementById("set-up-shop");

const shopEmailEl = document.getElementById("email-address");

const userPasswordEl = document.getElementById("password");
console.log(setUpShopBtnEl, shopEmailEl, userPasswordEl);
// add event listener to setUpShopBtnEl that ...
setUpShopBtnEl.addEventListener("click", function() {
  const email = shopEmailEl.value;

  const password = userPasswordEl.value;
  fetch("/api/signup", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      email,

      password
    })
  })
    .then(res => res.json())
    .then(data => console.log(data));
});
// adds input information into an object that can be added to the database
