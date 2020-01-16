const productNameEl = document.getElementById("product-name");
const priceEl = document.getElementById("price");
const quantityEl = document.getElementById("quantity");
const productDescriptionEl = document.getElementById("product-description");
const productImageEl = document.getElementById("product-image");
const addItemButtonEl = document.getElementById("add-item");
const fakeFormEl = document.getElementById("fakeForm");

let userData;

  axios
  .get("/api/user_data")
  .then(function (response) {
    console.log(response);
    userData = response.data.username;
    console.log(userData);
    renderFakeForm();
  })
  
  function renderFakeForm(){
      fakeFormEl.innerHTML = userData;
  }
  addItemButtonEl.addEventListener("click", function() {
    // const productName = productNameEl.value;
    // const username = userData;
    // const category = cate
    // const description = 
    // const price = 
    // const quantity = 
    // const imageURL = 

    axios
    .post("/api/add-product", {
      productName,
      username,
      category,
      description,
      price,
      quantity,
      imageURL
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
    
  })