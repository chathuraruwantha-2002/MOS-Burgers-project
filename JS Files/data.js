let productList = {
    Burgers: [
      {
        itemCode: "B1001",
        name: "Classic Burger",
        price: 1500.0,
        discount: 12,
        img: "",
      },
      {
        itemCode: "B1002",
        name: "Turkey Burger",
        price: 1600.0,
        discount: 15,
        img: "",
      },
      {
        itemCode: "B1003",
        name: "Chicken Burger",
        price: 1400.0,
        discount: 0,
        img: "",
      },
      
    ],
    Submarines: [
      {
        itemCode: "B10011",
        name: "Double Cheese n Chicken Submarine",
        price: 1900.0,
        discount: 16,
        img: "",
      },
      {
        itemCode: "B10012",
        name: "MOS Special Submarine",
        price: 3000.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10013",
        name: "Special Horgie Submarine",
        price: 2800.0,
        discount: 0,
        img: "",
      },
      
    ],
    Pasta: [
      {
        itemCode: "B10018",
        name: "Chicken n Cheese Pasta",
        price: 1600.0,
        discount: 15,
        img: "",
      },
      {
        itemCode: "B10019",
        name: "Chicken Penne Pasta",
        price: 1700.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10020",
        name: "Ground Turkey Pasta Bake",
        price: 2900.0,
        discount: 10,
        img: "",
      },
     
    ],
    Fries: [
      {
        itemCode: "B10025",
        name: "Steak Fries",
        price: 600.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10026",
        name: "French Fries",
        price: 650.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10027",
        name: "Sweet Potato Fries",
        price: 600.0,
        discount: 0,
        img: "",
      },
    ],
  
    Chicken: [
      {
        itemCode: "B10028",
        name: "Fried Chicken",
        price: 1200.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10029",
        name: "BBQ Chicken",
        price: 2100.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10030",
        name: "Devilled Chicken",
        price: 900.0,
        discount: 0,
        img: "",
      },
    ],
    Beverages: [
      {
        itemCode: "B10032",
        name: "Pepsi (330ml)",
        price: 990.0,
        discount: 5,
        img: "",
      },
      {
        itemCode: "B10033",
        name: "Coca-Cola (330ml)",
        price: 1230.0,
        discount: 0,
        img: "",
      },
      {
        itemCode: "B10034",
        name: "Sprite (330ml)",
        price: 1500.0,
        discount: 3,
        img: "",
      },
    ],
  };

  //Customers

  let customersArray = [
    {
      customerID: 1,
      img: "",
      firstName: "Kamal",
      lastName: "Gunasekara",
      occupation: "Electrical Engineer",
      gender: "Male",
      location: "Matara",
      email: "kaman@gmail.com",
      phoneNumber: "0742231234",
      additionalInfo: "",
    },
    {
      customerID: 2,
      img: "",
      firstName: "Manu",
      lastName: "Wijesinghe",
      occupation: "Doctor",
      gender: "Male",
      location: "Colombo",
      email: "manu@gmail.com",
      phoneNumber: "0712234453",
      additionalInfo: "",
    },
    {
      customerID: 3,
      img: "",
      firstName: "Kasun",
      lastName: "Perera",
      occupation: "Densist",
      gender: "male",
      location: "Kandy",
      email: "kasun@gmail.com",
      phoneNumber: "0765543234",
      additionalInfo: "",
    },
    {
      customerID: 4,
      img: "",
      firstName: "Sarath",
      lastName: "Bandara",
      occupation: "Accountant",
      gender: "Male",
      location: "Panadura",
      email: "sarathf@gmail.com",
      phoneNumber: "0756227656",
      additionalInfo: "",
    },
    {
      customerID: 5,
      img: "",
      firstName: "Nadeesha",
      lastName: "Hemamaali",
      occupation: "Teacher",
      gender: "Female",
      location: "Anuvarapura",
      email: "nadeesha@gmail.com",
      phoneNumber: "0723075760",
      additionalInfo: "",
    },
    {
      customerID: 6,
      img: "",
      firstName: "Madara",
      lastName: "Wanigarathna",
      occupation: "Lawyer",
      gender: "Male",
      location: "Jaffna",
      email: "madara.@gmail.com",
      phoneNumber: "07623234453",
      additionalInfo: "",
    },
    {
      customerID: 7,
      img: "",
      firstName: "Kamani",
      lastName: "Wijesinghe",
      occupation: "Cardiologist",
      gender: "Female",
      location: "Matara",
      email: "kamani.j@gmail.com",
      phoneNumber: "0765009820",
      additionalInfo: "",
    },
    {
      customerID: 8,
      img: "",
      firstName: "Chamath",
      lastName: "Perera",
      occupation: "Architect",
      gender: "male",
      location: "Awissawella",
      email: "chamatha@gmail.com",
      phoneNumber: "0713456739",
      additionalInfo: "",
    },
    {
      customerID: 9,
      img: "",
      firstName: "Sandaruwan",
      lastName: "Dissanayake",
      occupation: "Quentm Scientist",
      gender: "Male",
      location: "Kalutara",
      email: "sandaruwan.d@gmail.com",
      phoneNumber: "0743325546",
      additionalInfo: "",
    },
    {
      customerID: 10,
      img: "",
      firstName: "Danushka",
      lastName: "Wanigasuriya",
      occupation: "Pharmacist",
      gender: "Male",
      location: "Galle",
      email: "danushka@gmail.com",
      phoneNumber: "0773324456",
      additionalInfo: "",
    },
  ];

  //items

  export function getProducts() {
    return productList; 
  }

  export function setProduct(newProduct, category) {
    productList[category].push(newProduct);
    console.log("Product Added Successfully...!");
    alert("Product Added Successfully...!");
  }

  export function SearchProductUsingIndex(index, category) {
    return productList[category][index];
  }
  export function deleteProduct(index, category) {
     (productList[category].splice(index, 1));
  }
  
  export function updateProduct(index, category, updatedProduct) {
    productList[category][index] = updatedProduct;
    console.log("Product Updated Successfully...!");
    alert("Product Updated Successfully...!");
  }



  //Customers
  export function getCustomers() {
    return customersArray;
  }
  export function SearchCustomerUsingIndex(customerIndex) {
    return customersArray[customerIndex];
  }
  export function deleteCustomer(index) {
    (customersArray.splice(index, 1));
 }
 export function updateCustomer(index, updatedCustomer) {
   customersArray[index] = updatedCustomer;
   console.log("Customer Updated Successfully...!");
   alert("Customer Updated Successfully...!");
 }
 export function addCustomer(newCustomer) {
   customersArray.push(newCustomer);
   console.log("Customer Added Successfully...!");
   alert("Customer Added Successfully...!");
 }
 
  