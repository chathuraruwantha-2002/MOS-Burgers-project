import { getCustomers } from "./data.js";


//catch customer manager cards grid
console.log("Customer Manager Page Loaded..!");

//Items
let Customers = getCustomers();

// load customer cards to the grid  
for (let i = 0; i < Customers.length; i++) {
    document.getElementById("customers-grid").innerHTML +=
      `<div class="col mb-3">
            <div class="card h-100">
                <img src="/Images and lcons/man.png" class="card-img-top" alt="Item 1">
                <div class="card-body text-center pt-0">
                    <hr class="my-1">
                    <h5 class="card-title">${Customers[i].firstName} ${Customers[i].lastName}</h5>
                    <p class="card-text">${Customers[i].phoneNumber}</p>
                    <div class="d-flex justify-content-center gap-2 mt-3">
                        <a href=""><i class="bi bi-eye-fill p-3"></i></a>
                        <a href="#"><i class="bi bi-trash p-3 text-danger"></i></a>
                        <a href="#"><i class="bi bi-pencil-square p-3"></i></a>
                    </div>
                </div>
            </div>
        </div>`;

  }