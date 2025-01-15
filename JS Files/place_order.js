import { getProducts, SearchProductUsingIndex } from "./data.js";
console.log("Place Order Page Loaded...");


//Category Icons
let categoryIcons = document.querySelectorAll(".category-img");

//Items
let items = getProducts();

//items bar handling and loading items to the grid
categoryIcons.forEach((icon) => {
  icon.addEventListener("click", function () {

    document.getElementById("items-grid").innerHTML = '';

    if (icon.id === "category-1") {
      console.log(items.Burgers);

      for (let i = 0; i < items.Burgers.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100" data-index="${i}" data-category="Burgers">
                 <img src="/Images and lcons/turkey-burger.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Burgers[i].name}</h5>
                     <p class="card-text">Rs ${items.Burgers[i].price}.00</p>
                 </div>
             </div>
         </div>`;

      }
    } else if (icon.id === "category-2") {
      console.log(items.Pasta);

      for (let i = 0; i < items.Pasta.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100" data-index="${i}" data-category="Pasta">
                 <img src="/Images and lcons/pasta.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Pasta[i].name}</h5>
                     <p class="card-text">Rs ${items.Pasta[i].price}.00</p>
                 </div>
             </div>
         </div>`;
      }
    } else if (icon.id === "category-3") {
      console.log(items.Chicken);

      for (let i = 0; i < items.Chicken.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100" data-index="${i}" data-category="Chicken">
                 <img src="/Images and lcons/chicken.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Chicken[i].name}</h5>
                     <p class="card-text">Rs ${items.Chicken[i].price}.00</p>
                 </div>
             </div>
         </div>`;

      }
    } else if (icon.id === "category-4") {
      console.log(items.Fries);

      for (let i = 0; i < items.Fries.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100" data-index="${i}" data-category="Fries">
                 <img src="/Images and lcons/fries.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Fries[i].name}</h5>
                     <p class="card-text">Rs ${items.Fries[i].price}.00</p>
                 </div>
             </div>
         </div>`;
      }
    } else if (icon.id === "category-5") {
      console.log(items.Submarines);

      for (let i = 0; i < items.Submarines.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100" data-index="${i}" data-category="Submarines">
                 <img src="/Images and lcons/Submarine bun.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Submarines[i].name}</h5>
                     <p class="card-text">Rs ${items.Submarines[i].price}.00</p>
                 </div>
             </div>
         </div>`;
      }
    } else if (icon.id === "category-6") {
      console.log(items.Beverages);

      for (let i = 0; i < items.Beverages.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100" data-index="${i}" data-category="Beverages">
                 <img src="/Images and lcons/bevarages.png">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Beverages[i].name}</h5>
                     <p class="card-text">Rs ${items.Beverages[i].price}.00</p>
                 </div>
             </div>
         </div>`;
      }
    }
  });
});

// Trigger the "Burgers" category items on page load
document.addEventListener("DOMContentLoaded", function () {
  const burgersIcon = document.getElementById("category-1");
  if (burgersIcon) {
    burgersIcon.click();
  }
});


//card click
document.getElementById("items-grid").addEventListener("click", function (event) {
  const card = event.target.closest('.card');
  
  if (!card) {
    console.warn("No card element found.");
    return;
  }

  const itemIndex = card.dataset.index;
  const itemCategory = card.dataset.category;

  if (!itemIndex || !itemCategory) {
    console.warn("Required data attributes are missing.");
    return;
  }

  const itemObject = SearchProductUsingIndex(itemIndex, itemCategory);

  console.log("Item Index:", itemIndex);
  console.log("Item Category:", itemCategory);
  console.log("Item Object:", itemObject);

});
