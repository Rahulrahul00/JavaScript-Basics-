// In JavaScript, a Promise is an object that represents the eventual
//  completion (or failure) of an asynchronous operation and its resulting value.
//   It's used to handle asynchronous tasks such as fetching data from a server or 
//   reading files without blocking the execution of the code.

// A promise has three possible states:

// Pending: The initial state, meaning the operation is ongoing.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.


// Explanation:
// myPromise is created using the new Promise constructor.
//  It takes a function with two parameters: resolve and reject. 
//  If the asynchronous operation is successful, resolve() is called; if it fails, reject() is called.

// When you consume the promise, you use .then() to handle the resolved value and 
// .catch() to handle any errors if the promise is rejected.


// Example : 1

// let p = new Promise((reslove,reject) =>{
//     let a = 1+2

//     if(a==31){
//         reslove('Success');
//     }else{
//         reject('Failed');
//     }


// })

// p.then((message) =>{
//     console.log('This is in the then  ' + message)
// }).catch((message)=>{
//     console.log('This is in the catch  ' + message)
// })



// Example :2

// let fetchData = new Promise((reslove, reject) =>{

//     let data = false

//     if(data != true){
//         reslove("Success")
//     }else{
//         reject("Failed")
//     }
// });

// fetchData.then((msg) =>{
//     console.log('This Data Fetching  '+ msg );
// }).catch((msg) =>{
//     console.log('This Data Fetching  '+ msg);
// });



// Example : 3 promise Chaining

// Walk the Dog
// Clean the Kitchen
// Take out the trash


function walkDog(){
    return new Promise((reslove, reject) =>{
        setTimeout(()=>{

            const dogWalked = true;
            if(dogWalked){
                reslove("You Walk the dog 🐕");
            }else{
                reject("You Did'nt walk the dog");
            }
            
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((reslove,reject) =>{
        setTimeout(()=>{

            const kitchenClean = true;

            if(kitchenClean){
                reslove("You clean the kitchen 🧺🧹");
            }else{
                reject("You Did'nt Clean the Kitchen");
            }
          
        }, 2500)
    });
}

function takeTrash(){
    return new Promise((reslove,reject) =>{
        setTimeout(()=>{

            const takeTrash = false;

            if(takeTrash){
                reslove("You take out the trash 🗑️♻️");
            }else{
                reject("You Did'nt take trash");
            }
         
        }, 500);
    });
}

walkDog().then(value =>{console.log(value); return cleanKitchen()})
         .then(value =>{console.log(value); return takeTrash()})
         .then(value => {console.log(value); console.log("You finished all the works")})
         .catch(error => console.error(error));
