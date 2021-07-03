// Q1. Write a JavaScript program to find the longest string from a given array.
// Sample Data
// Input:
// Array: ['asdf', 'sd', 'something','right','position']
// Output:
// "Longest String in array : something "

var arrString = ['asdf', 'sd', 'something','right','position'];

var newArr = [];

for (i = 0; i < arrString.length; i++) {

    // console.log(arrString[i+1])
    if (arrString[i+1] !== undefined) {
        if(arrString[i].length > arrString[i+1].length ) {
            newArr.pop();
            newArr.push(arrString[i]);
        }
    } else {
        break;
    }
    
}

console.log(`Longest String in array: ${newArr[0]}`);

// Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given
// array.
// Sample Data
// Input:
// Array: [NaN, 0, 15, false, -22, '',undefined, 47, null,94]
// Output:
// [15, -22, 47, 94]

var nonSense = [NaN, 0, 15, false, -22, '',undefined, 47, null,94];
var newSense = [];

for (i = 0; i < nonSense.length; i++) {

    if(nonSense[i]) {
        newSense.push(nonSense[i]);
    }
}
console.log(newSense);

// Q3. Write a JavaScript code to divide a given array of positive integers into two parts.
// First element goes to first part, second element goes to second part, and third element
// goes to first part and so on.
// Now compute the sum of two parts and store into an array of size two.
// Sample Data
// Input:
// Array: [1, 3, 6, 2, 5, 10]
// Output:
// [12, 15]

var numArr = [1, 3, 6, 2, 5, 10];
var numArr1 = [];
var numArr2 = [];
var totalNum = [];

for (i = 0; i < numArr.length; i++) {

    if(i % 2 == 0) {
        numArr1.push(numArr[i])
    } else {
        numArr2.push(numArr[i])
    }
}

// console.log(numArr1, numArr2);
var num1 = 0;
var num2 = 0;
for (i = 0; i < numArr1.length; i++) {
    num1 += numArr1[i];
    num2 += numArr2[i];
    if(i == numArr1.length-1 ) {
        totalNum.push(num1);
        totalNum.push(num2);
    }
}
console.log(totalNum);

// Q4. Write a JavaScript program to check whether there is at least one element which
// occurs in two given sorted arrays of integers.
// Sample Data
// Input 1:
// arr1 = [1,2,3];
// arr2 = [3,4,5];
// Output 1:
// True
// Input 2:
// arr1 = [1,2,3];
// arr2 = [4,5,6];
// Output 2:
// False

var arr1 = [1,2,3];
var arr2 = [4,5,6];

var result;

for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
        if(arr1[i] == arr2[j]) {
            result = 'True';
            break;
        } else {
            result = 'False';
        }
    }
}

console.log(result);

// Q5. Write a JavaScript function to find the difference of two arrays.
// Sample Data
// Input:
// arr1=[1, 2, 3]; arr2=[100, 2, 1, 10]
// Output:
// [3, 100, 10]

var arr3=[1, 2, 3];
var arr4=[100, 2, 1, 10];


// for (i = 0; i < arr3.length; i++) {
//     for (j = 0; j < arr4.length; j++) {
//         if(arr3[i] == arr4[j]) {
//             arr3.splice(i,1);
//             arr4.splice(j, 1); 
//         } 
//     }
// }


// var arr5 = [];
//     for(var i in this) {   
//         if(arr2.indexOf(this[i]) > -1){
//             ret.push(this[i]);
//         }
//     }

// var z = arr4.filter(function(val) {
//     return arr3.indexOf(val) != -1;
//   });
// console.log(z);

var arr5 = arr3.filter(function(val) {
    return arr4.indexOf(val) == -1;
  });
  
var arr6 = arr4.filter(function(val) {
    return arr3.indexOf(val) == -1;
  })
console.log(arr6);

console.log(arr5)
arr5.push(arr6[0])
arr5.push(arr6[1])
console.log(arr5)