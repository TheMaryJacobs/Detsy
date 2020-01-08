import API from "/js/api.js";

const fakeData = [
  {
    user_name: "Phil",
    email: "totallyPhilsEmail@email.email",
    shop_name: "Phil's Homemade Candy",
    description:
      "I make my own succulent sweets, you can savor these suckables all day!",
    image: "/images/bowling.png"
  },
  {
    user_name: "Jeff",
    email: "totallyJeffEmail@email.email",
    shop_name: "Jeff's Homemade Stools",
    description:
      "Everyone needs a place to sit, why not on one of my homemade stools??",
    image: "/images/cheese.png"
  },
  {
    user_name: "Carla",
    email: "totallyCarlasEmail@email.email",
    shop_name: "Carla's Cat Sweaters",
    description: "For your furry, and not so furry, feline friends.",
    image: "/images/gear.png"
  },
  {
    user_name: "Sally",
    email: "totallySallysEmail@email.email",
    shop_name: "Sally's Face Mask",
    description:
      "Why spend a bunch of money when you can give it to me instead??",
    image: "/images/ipad.png"
  },
  {
    user_name: "Margot",
    email: "totallyMargotsEmail@email.email",
    shop_name: "Margot's Homemade Recipe Books",
    description:
      "I've been baking and making since 1932, buy my books so you can send some timeless wisdom and love down the mouths of the people you love.",
    image: "/images/robot.png"
  },
  {
    user_name: "Mary",
    email: "totallyMarysEmail@email.email",
    shop_name: "Mary's Homemade Shoes",
    description: "I make shoes.",
    image: "/images/shoe.png"
  }
];

// Get references to page elements
//MJ - Homepage Elements
const signUpBtnEl = document.getElementById("sign-up-btn");
console.log(signUpBtnEl);
const cardEls = document.querySelectorAll(".card");

console.log(cardEls);

//function used to shuffle an array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(fakeData);

//function that will render the innerHTMl of the 6 cards on the page
function renderCards() {
  for (let i = 0; i < cardEls.length; i++) {
    const card = cardEls[i];
    card.innerHTML = `  <img src="${fakeData[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="shop-name card-title">${fakeData[i].shop_name}</h5>
        <p id="shop-description" class="card-text">${fakeData[i].description}</p>
        <a href="/user-page" class="btn visit-shop">Visit Shop</a>
    </div>`;
  }
}
renderCards();

//pseudocode - MJ
// event listener on signUpBtnEl that pops in sign-up.html into the main section

// populate cards with shop information from database - 1 for each shop in database?
// populate shopImageEls
// populate shopNameEls
// populate shopDescriptionEls

// event listeners on visitShopBtnEls that direct to that specific shop's user-page.html

//from example file ----------------------
// refreshExamples gets new examples from the db and repopulates the list
// const refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     const exampleEls = data.map(function(example) {
//       const aEl = document.createElement("a");
//       aEl.innerHTML = example.text;
//       aEl.setAttribute("href", "/example/?id=" + example.id);

//       const liEl = document.createElement("li");
//       liEl.classList.add("list-group-item");
//       liEl.setAttribute("data-id", example.id);
//       liEl.append(aEl);

//       const buttonEl = document.createElement("button");
//       buttonEl.classList.add("btn", "btn-danger", "float-right", "delete");
//       buttonEl.innerHTML = "ｘ";
//       buttonEl.addEventListener("click", handleDeleteBtnClick);

//       liEl.append(buttonEl);

//       return liEl;
//     });

//     exampleListEl.innerHTML = "";
//     exampleListEl.append(...exampleEls);
//   });
// };
// refreshExamples();

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// const handleFormSubmit = function(event) {
//   event.preventDefault();

//   const example = {
//     text: exampleTextEl.value.trim(),
//     description: exampleDescriptionEl.value.trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   exampleTextEl.value = "";
//   exampleDescriptionEl.value = "";
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// const handleDeleteBtnClick = function(event) {
//   const idToDelete = event.target.parentElement.getAttribute("data-id");
//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// submitBtnEl.addEventListener("click", handleFormSubmit);
// document.querySelectorAll(".delete").forEach(btn => {
//   btn.addEventListener("click", handleDeleteBtnClick);
// });
