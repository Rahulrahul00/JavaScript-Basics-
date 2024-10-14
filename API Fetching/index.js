
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
        productName.style.color = "#fff";


        //create a p element for the product price
        let productPrice = document.createElement("p");
        productPrice.textContent = `price : ${item.price}₹`;
        

        //create a p element for the product quantity
        let productQty = document.createElement("p");
        productQty.textContent =`Quantity:${item.quantity} Kg`;


        //create a p element for the product stock
        let productStock = document.createElement("p");
        productStock.textContent = item.stock;    


        

        // console.log(productName)

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productQty);
        productDiv.appendChild(productStock);



        dataDisplay.appendChild(productDiv);
    

    });

  

});


    


































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





