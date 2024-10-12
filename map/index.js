

// Map method


// Summary of map() Working:
// Input Array (after filter()): [20, 40]
// Callback Function: value => value * 2
// Output Array (after map()): [40, 80]
// Key Features of map():
// Creates a New Array: map() does not modify the original array. It produces a new array containing the results of applying the provided function to each element.
// Function Applied to Each Element: The function can transform the elements in any way you specify (in this case, multiplying each by 2).
// Chaining: You can chain map() after other array methods like filter(), as shown in your code.

// let num = [11,20,31,40,51];

// let result = num.filter(value => value%2 === 0)

//     .map(value => value*2)
//     .reduce((a,b)=> a+b);
//     console.log(result); 



// Example 1: Extracting Property Values from Objects

// let userDetails = [
//     {
//         name : "Rahul",
//         place : "kochi",
//         job : "Fullstack Developer",
//         age : 26
//     },

//     {
//         name : "Deepu",
//         place : "Paravur",
//         job : "Mern Stack Developer",
//         age : 26
//     },
//     {
//         name : "vijesh",
//         place : "Thrissur",
//         job : "Flutter Developer",
//         age : 27
//     }

    
// ]

// let users = userDetails.map(nameValue => {
//     return {name : nameValue.name, age : nameValue.age};
// });
// console.log(users);



// Example 2: Creating an Array of Lengths of Strings

// let words = ["Rahul", "Deepu", "vijesh","anooja","aswathy","althaf","sreekutty","sarath"];

// let wordsLength = words.map( wrd => wrd.length);

// console.log(wordsLength);




// Example 3: Complex Transformations

// let products = [
//     {id:1, name:"iphone", price:1000},
//     {id:2, name:"MacBook", price:500},
//     {id:3, name:"s23UltraPro", price:400}
// ]


// let discountPrice = products.map(discount => {
//     return{
//         id : discount.id,
//         name: discount.name,
//         price: discount.price *0.9 //apply 10% discount
//     };
// })

// console.log(discountPrice);




//Example :4 above same method by using map and spread opertor

// let productDetails = [
//     {id:1, name:"iphone", price:1000},
//     {id:2, name:"MacBook", price:500},
//     {id:3, name:"s23UltraPro", price:400}
// ]

// let totalDiscount = productDetails.map(product => product ({
//     ...product, // Use spread operator to copy the existing properties

//     discountPrice : product.price *0.9//apply  10% discount
    
// }))

// console.log(totalDiscount);




// Example : 5 Flattening an Array of Objects

// const posts =[
//     {title: "post1", tags:["javaScript", "ReactJs", "Angular"]},
//     {title: "post2", tags:["NodJs","MonoDB","ExpressJs"]},
//     {title: "posst3", tags:["ReactNative","Flutter","Dart"]}
// ];

// let allTags = posts.map(post => post.tags).flat();

// console.log(allTags);



//Example : 6 Nest array by using Flat map method

const jobs =[
    {title: "job1", 
    tags:["HTML",
          "CSS",
          ["JavaScript",["ReactJs","AngularJs"]],
          ["MonoDB",["ExpressJs",["mySQL","NOSQL"]]]]},

    // {title: "job2", tags:["NodJs","MonoDB","ExpressJs"]},
    // {title: "jobt3", tags:["ReactNative","Flutter","Dart"]}
];

// let flatDepth1 = jobs.map(job => job.tags).flat();
// let flatDepth2 = jobs.map(job => job.tags).flat(2);
// let flatDepth3 = jobs.map(job => job.tags).flat(3);
// let flatDepth4 = jobs.map(job => job.tags).flat(4);


// console.log(flatDepth1);
// console.log(flatDepth2);
// console.log(flatDepth3);
// console.log(flatDepth4);


// .Chaining map() with Other Array Methods
// You can chain map() with other array methods like filter(), reduce(), or sort() to 
// perform more complex transformations.

// Example:6 Filter, Transform, and Sort Data
// Let’s say you have an array of users, and you want to:

// Filter out users younger than 30.
// Transform each remaining user by extracting their name and age.
// Sort the result by age.

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 40 }
];

let younger = users
    .filter(user => user.age < 30) // Filters users with age < 30
    .map(user => {
        return { name: user.name, age: user.age }; // Creates a new object with name and age
    })
    .sort((a, b) => a.age - b.age); // Sorts the resulting array by age

console.log(younger);