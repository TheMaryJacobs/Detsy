import API from "/js/api.js";

// Get references to page elements
//MJ - Homepage Elements
const signUpBtnEl = document.getElementById("sign-up-btn");
console.log(signUpBtnEl);
const cardEls = document.querySelectorAll(".card");
console.log(cardEls);

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
