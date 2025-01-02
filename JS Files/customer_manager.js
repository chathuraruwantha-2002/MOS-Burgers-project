import { getCustomers, SearchCustomerUsingIndex, deleteCustomer, updateCustomer, addCustomer } from "./data.js";


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
                        <a href="#" class="view-customer"><i class="bi bi-eye-fill p-3" data-index="${i}"></i></a>
                        <a href="#" class="delete-customer"><i class="bi bi-trash p-3 text-danger" data-index="${i}"></i></a>
                        <a href="#" class="edit-customer"><i class="bi bi-pencil-square p-3" data-index="${i}"></i></a>
                    </div>
                </div>
            </div>
        </div>`;

}





// Add New Customer Modal
const addCustomerModal = new bootstrap.Modal(document.getElementById("AddCustomerModal"));

// Open form
document.getElementById("addNewCustomerBtn").addEventListener("click", () => {
  addCustomerModal.show();
});





// card click events (view, delete, edit) .......

document.getElementById("customers-grid").addEventListener("click", function (event) {



  // View Customer
  if (event.target && event.target.matches("a.view-customer i")) {
    const card = event.target.closest('.card');
    const customerIndex = event.target.getAttribute('data-index');
    const customerobject = SearchCustomerUsingIndex(customerIndex);
    console.log("Customer Index:", customerIndex);
    console.log("Card Index:", customerobject);


    if (customerobject) {


      // Show the view product modal
      const viewCustomerModal = new bootstrap.Modal(document.getElementById("ViewCustomerModal"));
      viewCustomerModal.show();

    } else {
      console.error("Customer not found!");
    }

  }


  // Delete Customer
  if (event.target && event.target.matches("a.delete-customer i")) {
    const card = event.target.closest('.card');
    const customerIndex = event.target.getAttribute('data-index');
    const customerobject = SearchCustomerUsingIndex(customerIndex);
    console.log("Customer Index:", customerIndex);
    console.log("Card Index:", customerobject);

    if (customerobject) {
      deleteCustomer(customerIndex);
      card.remove();
    } else {
      console.error("Customer not found!");
    }

  }


  // Update Customer
  if (event.target && event.target.matches("a.edit-customer i")) {
    const card = event.target.closest('.card');
    const customerIndex = event.target.getAttribute('data-index');
    const customerobject = SearchCustomerUsingIndex(customerIndex);
    console.log("Customer Index:", customerIndex);
    console.log("Card Index:", customerobject);

    if (customerobject) {

      // Show the view product modal
      const viewCustomerModal = new bootstrap.Modal(document.getElementById("updateCustomerModal"));
      viewCustomerModal.show();


    }

  }

});

