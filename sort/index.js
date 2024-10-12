
// Sort Method

// The sort() method in JavaScript is used to sort the elements of an array in place,
//  meaning it modifies the original array rather than creating a new one. 
// The sorting can be done based on the Unicode values of elements if no comparison
//  function is provided, or it can be customized using a compare function.

// syntax 
// array.sort([compareFunction]);

// How sort() Works
// Default Behavior:

// If no compareFunction is provided, the sort() method converts each element
// to a string and compares their UTF-16 code unit values.
// This can lead to unexpected results when sorting numbers, as it sorts them as strings.

// Custom Sorting:

// To sort numbers (or objects based on specific properties), you should provide a compare function.
//  This function should take two arguments (let's call them a and b) and return:
// A negative number if a should come before b.
// Zero if they are equal.
// A positive number if a should come after b.


// Example : 1

let number = [1,100,40,20,70,3,8,50];

// This can lead to unexpected results when sorting numbers, as it sorts them as strings
number.sort();
console.log(number);


// Example : 2
// Custom Sorting:

let numbers = [1,100,40,20,70,3,8,50];

numbers.sort((a,b) => a -b);
console.log(numbers);


// Exmple : 3
// String sorting


let fruits = ["Manago", "Grapes","Orange","Apple","Banana"];

console.log(fruits.sort());

// Example : 4

// Array of object sorting method

let details = [
    {name:"rahul", age:26, place:"kochi"},
    {name:"Deepu", age:22, place :"Malappuram"},
    {name:"vijesh",age:27, place:"Thirrsur"},
    {name:"anooja", age:20, place:"Goa"}
]

console.log(details) //changes the original array

let userAge = details.sort((a,b)=> a.age - b.age);
console.log(userAge);




