// Arrow Functon
// Arrow functions in JavaScript are a more concise way to write functions.
//  They were introduced in ES6 and use the => syntax. 
//  Arrow functions are often used when you need a shorter function expression,
//  especially in cases like array methods (map, filter, reduce, etc.).

let add = (a, b) => a+b;
console.log(add(2,5));


let multiple = (a,b) => a*b;
console.log(multiple(5,5));

// . Arrow Function with Multiple Lines:

let mul = (a,b)=> {
    let result = a*b;
    return result;
}
console.log(mul(50,10));



// Using Arrow Function with map() (Double each element in an array):

let number = [1,2,3,4,5,6,7,8,9,10];

let double = number.map(num => num*2);

console.log(double);


// Arrow Function Returning an Object:

let getUser = ()=>({name:"Rahul",age: 26,job:"softwareDeveloper"})

console.log(getUser());