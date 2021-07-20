// Q1. Write a JavaScript program to create a new array by reversing the elements of given
// array.
// Sample Data
// Input:
// arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
// Output:
// ["f", 8, "e", 7, "d", 6, "c", 3, "b", 2, "a", 1]

let arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'];
arr.reverse();
console.log(arr);

// Q2. Write a JavaScript program to check if there is at least one element which occurs in
// two given sorted arrays of integers.
// Sample Data
// Input:
// arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
// arr2 = [7, 13, 25, 46, 58, 70, 84];
// Output:
// Element found: Yes

let arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
let arr2 = [7, 13, 25, 46, 58, 70, 84];
let arr3 = [];
const result = arr1.filter(arr => {
    for(let i = 0; i < arr2.length; i++) {
        if(arr === arr2[i]) {
            arr3.push(arr2[i]);
        }
    }
});

if (arr3.length >= 1) {
    console.log("Element Found: Yes");
    console.log(arr3)
}

// Q3. Write a JavaScript program to check whether a given array of integers represents
// either a strictly increasing or a strictly decreasing sequence.
// Example:
// [1,2,2] is NOT a strictly increasing sequence
// [1,2,3] is a strictly increasing sequence
// Sequences to test:
// 1. [4,5,6,7,8]
// 2. [3,4,6,6,7,8,9]
// 3. [34,23,45,55,67,77]

const findDuplicateNumber = (x) => {
    let newArr = x.sort();
    let value1;
    let value2;
    // console.log(newArr);
    for(let i = 0; i < newArr.length; i++) {
        if (newArr[i] == newArr[i+1]) {
            value1 = true;
        } else {
            value2 = false;
        }
    }
    if(value1) {
        console.log(x + ' is NOT a strictly increasing sequence.');
    } else {
        console.log(x + ' is a strictly increasing sequence.');
    }
}

findDuplicateNumber([4,5,6,7,8]);
findDuplicateNumber([3,4,6,6,7,8,9]);
findDuplicateNumber([34,23,45,55,67,77]);

// Q4. Write a JavaScript function to convert an amount to coins.
// Sample Data
// Input:
// 46, [25, 10, 5, 2, 1]
// Here 46 is the amount and 25, 10, 5, 2, 1 are coins.
// Output:
// 25, 10, 10, 1

const coinChanger = (amount, coin) => {
    let newArr = [];
    for(let i = 0; i < coin.length; i++) {
        if (amount >= coin[i]) {
            newArr.push(coin[i]);
            amount -= coin[i]; 
            while (amount > coin[i]) {
                amount -= coin[i];
                newArr.push(coin[i]);
            }
        }
    }
    console.log(newArr);
    console.log(amount);
}

coinChanger(101, [25,10,5,2,1]);

// Q5. Write a JavaScript function to create a new array from given array by formatting the
// numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and
// 4 to 4th.
// Sample Data
// Input:
// [22,8, 301, 404, 35, 99]
// Output:
// ["22nd", "8th", "301st", "404th", "35th", "99th"]


function sufflixChanger(numArr) {
    let x;
    let y;

    // pushing the sufflix to an array
    let result = [];
    for(let i = 0; i < numArr.length; i++) {
        x = numArr[i] % 10;
        y = numArr[i] % 100;
        if (x == 1 && y != 11){
            result.push(numArr[i]+'st');
        } else if (x == 2 && y != 12) {
            result.push(numArr[i]+'nd');
        } else if (x == 3 && y != 13) {
            result.push(numArr[i]+'rd');
        } else {
            result.push(numArr[i]+'th');
        }
    }
    console.log(result);
}

sufflixChanger([22, 13, 301, 404, 35, 99]);

const item = [
    { name: "Milk Bottle", price: 30, discountPercent: 10},
    { name: "Cheese", price: 10, discountPercent: 0},
    { name: "Packaged Meat (1kg)", price: 100, discountPercent: 5},
  ]

const calculatePrices = (itemArr) => {
    let totalPriceArray = itemArr.map(item => item.price - (item.price * (item.discountPercent/100)));
    let total = 0
    let totalPrice = totalPriceArray.forEach(price => {
        total += price;
    });
    console.log(total)
}

const calculateNormalPrices = (itemArr) => {
    
    let total = 0;
    for (let i = 0; i < itemArr.length; i++) {
        total = total + itemArr[i].price - (itemArr[i].price * itemArr[i].discountPercent/100);
    }
    console.log(total);
}

calculatePrices(item);
calculateNormalPrices(item);