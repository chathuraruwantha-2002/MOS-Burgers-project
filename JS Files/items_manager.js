import { getProducts, setProduct, SearchProductUsingIndex } from "./data.js";

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
             <div class="card h-100">
                 <img src="/Images and lcons/turkey-burger.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Burgers[i].name}</h5>
                     <p class="card-text">Rs ${items.Burgers[i].price}.00</p>
                     <div class="d-flex justify-content-center gap-2 mt-3">
                         <a href="#" class="view-item"><i class="bi bi-eye-fill p-2" data-index="${i}" data-category="Burgers"></i></a>
                         <a href="#" class="delete-item"><i class="bi bi-trash p-2 text-danger" data-index="${i}" data-category="Burgers"></i></a>
                         <a href="#" class="edit-item"><i class="bi bi-pencil-square p-2" data-index="${i}" data-category="Burgers"></i></a>
                     </div>
                 </div>
             </div>
         </div>`;

      }
    } else if (icon.id === "category-2") {
      console.log(items.Pasta);

      for (let i = 0; i < items.Pasta.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100">
                 <img src="/Images and lcons/pasta.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Pasta[i].name}</h5>
                     <p class="card-text">Rs ${items.Pasta[i].price}.00</p>
                     <div class="d-flex justify-content-center gap-2 mt-3">
                         <a href="#" class="view-item"><i class="bi bi-eye-fill p-2" data-index="${i}" data-category="Pasta"></i></a>
                         <a href="#" class="delete-item"><i class="bi bi-trash p-2 text-danger" data-index="${i}" data-category="Pasta"></i></a>
                         <a href="#" class="edit-item"><i class="bi bi-pencil-square p-2" data-index="${i}" data-category="Pasta"></i></a>
                     </div>
                 </div>
             </div>
         </div>`;
      }
    } else if (icon.id === "category-3") {
      console.log(items.Chicken);

      for (let i = 0; i < items.Chicken.length; i++) {
        document.getElementById("items-grid").innerHTML +=
        `<div class="col mb-3">
             <div class="card h-100">
                 <img src="/Images and lcons/chicken.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Chicken[i].name}</h5>
                     <p class="card-text">Rs ${items.Chicken[i].price}.00</p>
                     <div class="d-flex justify-content-center gap-2 mt-3">
                         <a href="#" class="view-item"><i class="bi bi-eye-fill p-2" data-index="${i}" data-category="Chicken"></i></a>
                         <a href="#" class="delete-item"><i class="bi bi-trash p-2 text-danger" data-index="${i}" data-category="Chicken"></i></a>
                         <a href="#" class="edit-item"><i class="bi bi-pencil-square p-2" data-index="${i}" data-category="Chicken"></i></a>
                     </div>
                 </div>
             </div>
         </div>`;
          
      }
    } else if (icon.id === "category-4") {
      console.log(items.Fries);

      for (let i = 0; i < items.Fries.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100">
                 <img src="/Images and lcons/fries.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Fries[i].name}</h5>
                     <p class="card-text">Rs ${items.Fries[i].price}.00</p>
                     <div class="d-flex justify-content-center gap-2 mt-3">
                         <a href="#" class="view-item"><i class="bi bi-eye-fill p-2" data-index="${i}" data-category="Fries"></i></a>
                         <a href="#" class="delete-item"><i class="bi bi-trash p-2 text-danger" data-index="${i}" data-category="Fries"></i></a>
                         <a href="#" class="edit-item"><i class="bi bi-pencil-square p-2" data-index="${i}" data-category="Fries"></i></a>
                     </div>
                 </div>
             </div>
         </div>`;
      }
    } else if (icon.id === "category-5") {
      console.log(items.Submarines);

      for (let i = 0; i < items.Submarines.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100">
                 <img src="/Images and lcons/Submarine bun.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Submarines[i].name}</h5>
                     <p class="card-text">Rs ${items.Submarines[i].price}.00</p>
                     <div class="d-flex justify-content-center gap-2 mt-3">
                         <a href="#" class="view-item"><i class="bi bi-eye-fill p-2" data-index="${i}" data-category="Submarines"></i></a>
                         <a href="#" class="delete-item"><i class="bi bi-trash p-2 text-danger" data-index="${i}" data-category="Submarines"></i></a>
                         <a href="#" class="edit-item"><i class="bi bi-pencil-square p-2" data-index="${i}" data-category="Submarines"></i></a>
                     </div>
                 </div>
             </div>
         </div>`;
      }
    } else if (icon.id === "category-6") {
      console.log(items.Beverages);

      for (let i = 0; i < items.Beverages.length; i++) {
        document.getElementById("items-grid").innerHTML +=
          `<div class="col mb-3">
             <div class="card h-100">
                 <img src="/Images and lcons/bevarages.png" class="card-img-top" alt="Item 1">
                 <div class="card-body text-center pt-0">
                     <hr class="my-1">
                     <h5 class="card-title">${items.Beverages[i].name}</h5>
                     <p class="card-text">Rs ${items.Beverages[i].price}.00</p>
                     <div class="d-flex justify-content-center gap-2 mt-3">
                         <a href="#" class="view-item"><i class="bi bi-eye-fill p-2" data-index="${i}" data-category="Beverages"></i></a>
                         <a href="#" class="delete-item"><i class="bi bi-trash p-2 text-danger" data-index="${i}" data-category="Beverages"></i></a>
                         <a href="#" class="edit-item"><i class="bi bi-pencil-square p-2" data-index="${i}" data-category="Beverages"></i></a>
                     </div>
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


// Open form
document.getElementById("addNewProductBtn").addEventListener("click", () => {
  const addProductModal = new bootstrap.Modal(document.getElementById("addProductModal"));
  addProductModal.show();
});





// Add New Product function
function addNewProduct() {
  const productCodeInput = document.getElementById("itemCode");
  const productNameInput = document.getElementById("itemName");
  const productPriceInput = document.getElementById("itemPrice");
  const categorySelect = document.getElementById("itemCategory");
  const discountInput = document.getElementById("itemDiscountPrice");
  const productImgInput = document.getElementById("itemImage");

  if (!productCodeInput || !productNameInput || !productPriceInput || !categorySelect || !discountInput || !productImgInput) {
    console.error("One or more form elements are missing!");
    return;
  }

  const productCode = productCodeInput.value;
  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);
  const productCategory = categorySelect.options[categorySelect.selectedIndex]?.text || '';
  const discount = parseFloat(discountInput.value);
  const productImg = productImgInput.value;

  const newProduct = {
    itemCode: productCode,
    name: productName,
    price: productPrice,
    discount: discount,
    img: productImg,
  };

  setProduct(newProduct, productCategory);

  // Close the modal
  const addProductModal = new bootstrap.Modal(document.getElementById("addProductModal"));
  addProductModal.hide();
}


//form submit function
const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewProduct();
  console.log("Form submitted");
});

//search function

const searchInput = document.getElementById("SearchItems");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchProducts(searchTerm);
});

function searchProducts(searchTerm) {
  const productCards = document.querySelectorAll(".card");
  productCards.forEach((card) => {
    const productName = card.querySelector(".card-title").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// card click events (view, delete, edit)
document.getElementById("items-grid").addEventListener("click", function (event) {

  // View item
  if (event.target && event.target.matches("a.view-item i")) {
    const card = event.target.closest('.card');
    const itemIndex = event.target.getAttribute('data-index');
    const itemCategory = event.target.getAttribute('data-category');
    const itemobject = SearchProductUsingIndex(itemIndex, itemCategory);
    console.log("Item Index:", itemIndex);
    console.log("Item Category:", itemCategory);
    console.log("Card Index:", itemobject);

    if (itemobject) {
      
     // document.getElementById("viewItemImage").src = itemObject.image || "/Images and lcons/default.png";
      document.getElementById("viewItemCode").textContent = itemobject.itemCode || "N/A";
      document.getElementById("viewItemName").textContent = itemobject.name || "N/A";
      document.getElementById("viewItemPrice").textContent = `Rs. ${itemobject.price || "0.00"}`;
      document.getElementById("viewItemDiscount").textContent = `Rs. ${itemobject.discount || "0.00"}`;
      //document.getElementById("viewItemExpire").textContent = itemObject.expireDate || "N/A";
      //document.getElementById("viewItemQuantity").textContent = itemObject.quantity || "N/A";
      //document.getElementById("viewItemCategory").textContent = itemObject.category || "N/A";
      //document.getElementById("viewItemDescription").textContent = itemObject.description || "N/A";
      //document.getElementById("viewItemAdditional").textContent = itemObject.additionalInfo || "N/A";

      // Show the view product modal
      const viewProductModal = new bootstrap.Modal(document.getElementById("ViewProductModal"));
      viewProductModal.show();
    } else {
      console.error("Item not found!");
    }
    
    
  }
  

  // Delete item
  if (event.target && event.target.matches("a.delete-item i")) {
    const card = event.target.closest('.card');
    const itemIndex = event.target.getAttribute('data-index');
    const itemCategory = event.target.getAttribute('data-category');
    const itemobject = SearchProductUsingIndex(itemIndex, itemCategory);
    console.log("Item Index:", itemIndex);
    console.log("Item Category:", itemCategory);
    console.log("Card Index:", itemobject);
  }



  // Edit item
  if (event.target && event.target.matches("a.edit-item i")) {
    const card = event.target.closest('.card');
    const itemIndex = event.target.getAttribute('data-index');
    const itemCategory = event.target.getAttribute('data-category');
    const itemobject = SearchProductUsingIndex(itemIndex, itemCategory);
    console.log("Item Index:", itemIndex);
    console.log("Item Category:", itemCategory);
    console.log("Card Index:", itemobject);
  }
});


