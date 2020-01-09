const shopNameEl = document.getElementById("shopName");
const shopDescriptionEl = document.getElementById("shopDescription");
const productContainerEl = document.getElementById("productContainer");

const fakeData = [
  {
    shopName: "Paul's Wonderful Things",
    shopDescription: "I sell tried and true cures for your worse ailments",
    productName: "Paul's Polypurpose Panacea",
    productDescription:
      "Have you been hard pressed by the vapors? The grippe got you down? Has your travel overseas gotten you stricken with King's Evil? Suffering from Milk Leg? Well, this magnificent product is for you.  It will cure what ails you, and then some. You will be reinvigorated, recuperated, reeducated, regenerated, refrigerated with no chance of it being regurgitated. This baby goes down smooth, and leaves you feeling smoother.",
    price: "49",
    productImage: "/images/robot.png"
  },
  {
    shopName: "Mary's Custom Scrunchies",
    shopDescription:
      "One stop shop for all your scrunchie needs this decade. Custom made in over 100 fabric options.",
    productName: "Scrunchie XL",
    productDescription: "Super big and poofy scrunchy",
    price: "17.99",
    productImage: "/images/yarn.png"
  },
  {
    shopName: "Peter's Pork Rinds",
    shopDescription:
      "Artisinal small batch pork rinds from locally sourced heirloom swine.",
    productName: "Cool Ranch Pork Rinds",
    productDescription: "Menthol Buttermilk Pork Rinds",
    price: "10.00",
    productImage: "/images/cheese.png"
  },
  {
    shopName: "Ulla's Umbrellas",
    shopDescription: "I made umbrellas.",
    productName: "Mysterious Black Funeral Umbrella",
    productDescription:
      "Black, mysterious umbrella perfect for the funeral of an enemy.",
    price: "22",
    productImage: "/images/umbrella.png"
  },
  {
    shopName: "Chrissy Lou Boo Ton",
    shopDescription: "These expensive these is red bottoms.",
    productName: "CFMPs",
    productDescription: "Bloody shoes",
    price: "859",
    productImage: "/images/shoe.png"
  }
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(fakeData);

function renderProducts() {
  productContainerEl.innerHTML = "";
  shopNameEl.innerHTML = fakeData[0].shopName;
  shopDescriptionEl.innerHTML = fakeData[0].shopDescription;

  for (let i = 0; i < fakeData.length; i++) {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
     <br>
     <div class="row">
         <div class="col-4">
             <img src="${fakeData[i].productImage}" class="product-image"">
         </div>

         <div class="col-8">
             <h1 id="productName">${fakeData[i].productName}</h1>
             <h2 id="productDescription" class="prod-desc">${fakeData[i].productDescription}</h2>
             <h3 id="price" class="price">$${fakeData[i].price}</h3>
             <button type="button" class="btn btn-lg contact-seller">Contact Seller</button>
         </div>
     </div>
     `;
    productContainerEl.append(productCard);
  }
}
renderProducts();
