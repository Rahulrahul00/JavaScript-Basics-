
// Flat Method

// In JavaScript, the flat() method is used to flatten an array.
// It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// The default depth is 1.

// Syntax
// array.flat([depth]);

// Inside working:
// The flat() method goes through each element in the array. 
// If it encounters an element that is an array, it flattens that array up to the specified depth.
// If the depth is greater than 1, it recursively flattens the inner arrays.
// Example with detailed steps:
// For arr.flat(2):

// It first flattens one level: [1, 2, 3, 4, 5, [6, 7]].
// Since the depth is 2, it flattens again to produce [1, 2, 3, 4, 5, 6, 7].
// In the background, flat() checks if each element is an array, and based on the depth,
// it keeps calling itself recursively until the depth is reached or the array is fully flattened.

let arr = [1, 2, [3, 4], [5, [6, 7]]];

// Without depth, default is 1
console.log(arr.flat()); 
// Output: [1, 2, 3, 4, 5, [6, 7]]

// With depth of 2
console.log(arr.flat(2)); 
// Output: [1, 2, 3, 4, 5, 6, 7]




// Nest array by using Flat map method

const jobs =[
    {title: "job1", 
    tags:["HTML",
          "CSS",
          ["JavaScript",["ReactJs","AngularJs"]],
          ["MonoDB",["ExpressJs",["mySQL","NOSQL"]]]]},

    // {title: "job2", tags:["NodJs","MonoDB","ExpressJs"]},
    // {title: "jobt3", tags:["ReactNative","Flutter","Dart"]}
];

let flatDepth1 = jobs.map(job => job.tags).flat();
let flatDepth2 = jobs.map(job => job.tags).flat(2);
let flatDepth3 = jobs.map(job => job.tags).flat(3);
let flatDepth4 = jobs.map(job => job.tags).flat(4);


console.log(flatDepth1);
console.log(flatDepth2);
console.log(flatDepth3);
console.log(flatDepth4);
