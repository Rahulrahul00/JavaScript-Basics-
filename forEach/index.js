// In forEach it takes  three  optional parameters like values,index,arrValues these are represent array
// value : Represent current element in the array.For eg: the first loop iteration will use 20,then 30, and so on
//index: Represent the postion of the element in the array.So, for 20, the index number is 0; for 30, it's 1, and so on
// arrayValue : This is the entire array itself(num in this case)

// How forEach() Works Internally:
// It iterates over each element in the array.
// It calls the provided function (the callback) for every element in the array.
// The function has access to the current element, the index, and the full array.
// Note: forEach() doesn't return anything; it just executes the function for each element.



let num = [20,30,40,50,70];

num.forEach((value, index,arrValues)=>{
    // console.log(value,index,arrValues);

    console.log(value*2);

});



// let arrNum = [{
//     name : "Rahul",
//     age : 26,
//     place : "KOchi",
//     job : "software Engineer"


// }]

// arrNum.forEach((values,index,arrValue) =>{
//     console.log(values,index,arrValue);
// })


// find old or Even by using foreach loop

let arr = [2,7,4,10,40,5,3,1];

arr.forEach((value,index,arVal)=>{
    if(value %2 == 0){
        console.log(`index ${index}-> ${value} is a Even Number Full array is : ${arVal}`)
    }else{
        console.log(`index ${index}-> ${value} is a old Number Full array is : ${arVal}`);
    }
})

