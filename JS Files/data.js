let productList = {
    Burgers: [
      {
        itemCode: "B1001",
        name: "Classic Burger",
        price: 1500.0,
        discount: 0,
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

  export function getProducts() {
    return productList; 
  }

  export function setProduct(newProduct, category) {
    productList[category].push(newProduct);
  }

  export function SearchProductUsingIndex(index, category) {
    return productList[category][index];
  }

  