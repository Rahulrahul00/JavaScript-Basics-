//  Filter Method


/*The filter() method in JavaScript is used to create
a new array with all elements that pass a certain condition (or "test").
It runs a function on each element of the original array and returns only the elements that
return true for that condition.*/

/*callback: A function that tests each element of the array. If it returns true, the element is kept in the new array.
element: The current element being processed in the array.
index (optional): The index of the current element.
array (optional): The entire array itself.
thisArg (optional): Value to use as this inside the callback.*/

/*Key Features of filter():
It does not modify the original array but returns a new array with elements that pass the test.
If no elements pass the test, an empty array is returned.
It's commonly used for tasks like filtering even numbers, filtering objects based on a property, etc.*/



// let num = [11,20,31,40,51,60,73,95,100,];


//   let result =  console.log(num.filter( n => n%2 === 0));
//     console.log(num);

//     // another method

    // let arrNum = [1,2,3,4,5,6,7,8,9,10];

    // arrNum.filter(value => value %2 === 0) // value is arrNum :1,2,3,etc..
    // .forEach(value =>{
    //     console.log(value);
    // })

    

    // Find Greater number

    let arNum = [12,30,80,90,300,50,77,10];

    let greaterThan50 = arNum.filter(values => values >50);

    console.log(greaterThan50);


