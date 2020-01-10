const setUpShopBtnEl = document.getElementById("set-up-shop");
const shopImageEl = document.getElementById("shop-image");
const shopNameEl = document.getElementById("shop-name");
const shopDescriptionEl = document.getElementById("shop-description");
const shopEmailEl = document.getElementById("email-address");
const userNameEl = document.getElementById("user-name");
const userPasswordEl = document.getElementById("password");
console.log(
  setUpShopBtnEl,
  shopImageEl,
  shopNameEl,
  shopDescriptionEl,
  shopEmailEl,
  userNameEl,
  userPasswordEl
);
// add event listener to setUpShopBtnEl that ...
setUpShopBtnEl.addEventListener("click", function() {
  const shopImage = shopImageEl.value;
  const name = shopNameEl.value;
  const shopDescription = shopDescriptionEl.value;
  const email = shopEmailEl.value;
  const userName = userNameEl.value;
  const password = userPasswordEl.value;
  fetch("/api/signup", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      // shopImage,
      name,
      // shopDescription,
      email,
      userName,
      password
    })
  })
    .then(res => res.json())
    .then(data => console.log(data));
});
// adds input information into an object that can be added to the database
