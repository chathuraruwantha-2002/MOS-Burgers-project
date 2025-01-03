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

      //assighments
      document.getElementById("viewCustomerId").textContent = customerobject.customerID;
      document.getElementById("viewCustomerName").textContent = customerobject.firstName + " " + customerobject.lastName;
      document.getElementById("viewCustomerGender").textContent = customerobject.gender;
      document.getElementById("viewCustomerOccupation").textContent = customerobject.occupation;
      document.getElementById("viewCustomerLocation").textContent = customerobject.location;
      document.getElementById("viewCustomerPhno").textContent = customerobject.phoneNumber;
      document.getElementById("viewCustomerEmail").textContent = customerobject.email;
      document.getElementById("viewCustomerAdi").textContent = customerobject.additionalinfo;
      

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

      //assighments
      document.getElementById("UpdateCustomerId").value = customerobject.customerID;
      document.getElementById("UpdateCustomerFirstName").value = customerobject.firstName;
      document.getElementById("UpdateCustomerLastName").value = customerobject.lastName;
      document.getElementById("UpdateCustomerGender").value = customerobject.gender;
      document.getElementById("UpdateCustomerOccupation").value = customerobject.occupation;
      document.getElementById("UpdateCustomerLocation").value = customerobject.location;
      document.getElementById("UpdateCustomerPhno").value = customerobject.phoneNumber;
      document.getElementById("UpdateCustomerEmail").value = customerobject.email;
      document.getElementById("UpdateCustomerAdi").value = customerobject.additionalInfo;

      // Update customer button
      document.getElementById("updateCustomerBtn").addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Update Customer Button Clicked");
        UpdateCustomerinfo();
      })

      //cancel button
      document.getElementById("cancelUpdateBtn").addEventListener("click", () => {
        UpdateCustomerModal.hide();
        document.getElementById("customerFormUpdate").reset();
      })

      // Show the view product modal
      const UpdateCustomerModal = new bootstrap.Modal(document.getElementById("updateCustomerModal"));
      UpdateCustomerModal.show();

     function UpdateCustomerinfo(){
      // Get the form values
      const customerID = document.getElementById("UpdateCustomerId").value;
      const firstName = document.getElementById("UpdateCustomerFirstName").value;
      const lastName = document.getElementById("UpdateCustomerLastName").value;
      const gender = document.getElementById("UpdateCustomerGender").value;
      const occupation = document.getElementById("UpdateCustomerOccupation").value;
      const location = document.getElementById("UpdateCustomerLocation").value;
      const phoneNumber = document.getElementById("UpdateCustomerPhno").value;
      const email = document.getElementById("UpdateCustomerEmail").value;
      const additionalInfo = document.getElementById("UpdateCustomerAdi").value;

      if(customerID !== customerobject.customerID || firstName !== customerobject.firstName || lastName !== customerobject.lastName || gender !== customerobject.gender || occupation !== customerobject.occupation || location !== customerobject.location || phoneNumber !== customerobject.phoneNumber || email !== customerobject.email || additionalInfo !== customerobject.additionalInfo){

        // create customer object
        const customerobjectforupdate = {
          customerID: customerID,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          occupation: occupation,
          location: location,
          phoneNumber: phoneNumber,
          email: email,
          additionalInfo: additionalInfo
        };
        // update customer object
        updateCustomer(customerIndex, customerobjectforupdate);
        UpdateCustomerModal.hide();
        document.getElementById("customerFormUpdate").reset();
        }
        else{
          console.log("No changes made..!");
        }
      
      }
      

    }
  }
});

