
// Datas

let marketData = [
    {
        id : 100,
        name : "Tomato",
        price : 20,
        quantity : 500,
        stock : "In Stock"
    },
    {   id : 101,
        name : "Apple",
        price : 120,
        quantity : 50,
        stock : "In Stock"
    },
    {   id : 102,
        name : "Chicken",
        price : 238,
        quantity : 1000,
        stock : " Out of Stock"},

    {   id : 103,
        name : "Egg",
        price : 6,
        quantity : 200,
        stock : "In Stock"}
]


let stockDatas = [
    {
        stockName :"Apple",
        stockQty :"200Kg"

    },
    {
        stockName :"Orange",
        stockQty :"300Kg"
 
    },
    {
        stockName :"Beef",
        stockQty :"1000Kg"

    },
    {   stockName :"Chicken",
        stockQty :"2000Kg"
    }
]

let salesDatas = [
    {
        saleName :"Apple",
        category : "Fruits",
        quantitySold : 200,
        revenue : 4000

    },
    {
        saleName :"Beef",
        category : "Meat",
        quantitySold : 20,
        revenue : 100000
 
    },
    {
        saleName :"Tomato",
        category : "Vegetables",
        quantitySold : 80,
        revenue : 2000

    },
    {   
        saleName :"Chilly",
        category : "Vegetables",
        quantitySold : 20,
        revenue : 1500
    }
]




let showData = document.getElementById("showData");
let dataDisplay = document.getElementById("dataDisplay");


showData.addEventListener('click', ()=>{

    //clear the container before displaying the data
    dataDisplay.innerHTML = "";

    //iterate through market data and dynamically create elements for each product
    marketData.map(item =>{

        //create a new div for each product
        let productDiv = document.createElement("div");
        productDiv.classList.add("product"); // Add  a class for styling

        //create a H3 element for product name
        let productName = document.createElement("h3");
        productName.textContent = item.name;
        productName.style.color = "#001219";


        //create a p element for the product price
        let productPrice = document.createElement("p");
        productPrice.textContent = `price : ${item.price}₹`;
        productPrice.style.color="#fff";
        productPrice.style.marginTop="1rem";
        

        //create a p element for the product quantity
        let productQty = document.createElement("p");
        productQty.textContent =`Quantity:${item.quantity} Kg`;
        productQty.style.color="#fff";
        productQty.style.marginTop="0.5rem";


        //create a p element for the product stock
        let productStock = document.createElement("p");
        productStock.textContent = item.stock;
        productStock.style.color="#fff";
        productStock.style.marginTop="0.5rem";    


        

        // console.log(productName)

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productQty);
        productDiv.appendChild(productStock);



        dataDisplay.appendChild(productDiv);
    

    });

  

});

// stock item Datas


let stockData = document.getElementById("stockData");
let stockDisplay = document.getElementById("stockDisplay");

stockData.addEventListener('click', ()=>{

    stockDisplay.innerHTML = "";

 let stocks =  stockDatas.map(item =>{

    // create a new div for Stock Datas

 let stockDataDiv = document.createElement("div");
     stockDataDiv.classList.add("stock");   

     // create h3 element for stockName and quantity

     let stockName = document.createElement("h3");
         stockName.textContent = item.stockName;

     let stockQty = document.createElement("h4");
         stockQty.textContent =`Qty :${item.stockQty}`;

        //  console.log(stockQty);


        //  Append child to stock div

        stockDataDiv.appendChild(stockName);
        stockDataDiv.appendChild(stockQty);

      //Displaying 
        stockDisplay.appendChild(stockDataDiv);
        

         

       

    });
    //  console.log(stocks);
})



// Sales Datas

let salesData = document.getElementById("salesData");
let saleDisplay = document.getElementById("saleDisplay");

salesData.addEventListener('click', ()=>{

    // clear the container before display the sales Datas
    saleDisplay.innerHTML = "";

    salesDatas.map(item =>{

        // create a new div for sales datas
        let salesDataDiv = document.createElement("div");
            salesDataDiv.classList.add("sales");

            // create H3 tag for display sales datas

        let saleName = document.createElement("h3");
            saleName.textContent = `Saled Item : ${item.saleName}`

        let saleCategory = document.createElement("h3");
            saleCategory.textContent = `Category : ${item.category}`    
               
        let saleQty = document.createElement("h3");
            saleQty.textContent = `Qty : ${item.quantitySold}`    

        let saleRevenue = document.createElement("h3");
            saleRevenue.textContent = `Revenue : ${item.revenue}`    
            
            salesDataDiv.appendChild(saleName);
            salesDataDiv.appendChild(saleCategory);
            salesDataDiv.appendChild(saleQty);
            salesDataDiv.appendChild(saleRevenue);


            saleDisplay.appendChild(salesDataDiv);
    })

})


    


































// Fetch = Funtion used for make HTTP request to fetch resources.
//         (JSON style data, image, files)
//         simplifes the asynchronous data fetching in javascript and
//         used for interacting with API to retrive and send data asychronously over the web.
//         fetch (url, {options})


// Fetch data from the Cat API
// fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then(response => response.json())  // Convert the response to JSON
//   .then(data => {
//     // Handle the data, for example, log it to the console
//     console.log(data);

//     // You can also loop through the images and do something with each one
//     data.forEach(cat => {
//     (cat.url); // Accessing the URL of each cat image
//     });
//   })
//   .catch(error => {
//     // Handle any errors that occur during the fetch
//     console.error("Error fetching data:", error);
//   });
































// Fetch = Funtion used for make HTTP request to fetch resources.
//         (JSON style data, image, files)
//         simplifes the asynchronous data fetching in javascript and
//         used for interacting with API to retrive and send data asychronously over the web.
//         fetch (url, {options})


// Fetch data from the Cat API
// fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then(response => response.json())  // Convert the response to JSON
//   .then(data => {
//     // Handle the data, for example, log it to the console
//     console.log(data);

//     // You can also loop through the images and do something with each one
//     data.forEach(cat => {
//     (cat.url); // Accessing the URL of each cat image
//     });
//   })
//   .catch(error => {
//     // Handle any errors that occur during the fetch
//     console.error("Error fetching data:", error);
//   });





