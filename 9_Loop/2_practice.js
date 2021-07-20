// Q1. Write a JavaScript program to find the GCD of two numbers : 15 and 25.
// [ The GCD or Greatest Common Divisor of two integers is the largest integer that divides
// each of the integers such that their remainder is zero.]
// Sample Data
// Input:
// num1 = 15; 1 3 5 15
// num2 = 25; 1 5 25
// Output:
// 5

let num1 = 15;
let num2 = 25;
let arr1 = [];
let arr2 = [];
const findingGCD = (num1, num2) => {
    let i = 1;
    while(i <= num1) {
        if(num1 % i == 0) {
            arr1.push(i);
        }
        i++;
    }
    let j=1;
    while(j <= num2) {
        if(num2 % j == 0) {
            arr2.push(j);
        }
        j++;
    }
    let result = 0;
    for(let x = 0; x < arr1.length; x++){
        for(let y = 0; y < arr2.length; y++){
            if(arr2[y] == arr1[x]) {
                result = arr2[y];
            }
        }
    }
    return result;
}

// findingGCD(num1, num2);

// Q2. Write a JavaScript program to print the LCM of two numbers: 15 and 20?
// [A common multiple is a number that is a multiple of two or more integers. e.g. The
// common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two
// numbers is the smallest number (not zero) that is a multiple of both.]
// Sample Data
// Input:
// n1 = 5;
// n2 = 18;
// Output:
// 90

const findingLCM = (num1, num2) => {
    let result;
    let i = 1;
    while(i > 0) {
        if((num1 * i) % num2 == 0) {
            console.log(num1 * i);
            break;
        }
        i++;
        // console.log(i);
        // break;
    }
    // const result = (num1 * num2)/findingGCD(num1, num2)
    // return result;
}

// const findingLCM2 = (num1, num2) => {
//     const result = (num1 * num2)/findingGCD(num1, num2)
//     return result;
// }

// console.log(findingLCM2(num1,num2));
findingLCM(num1,num2);

// Q3. Write a JavaScript program to find the number of even values in sequence before
// the first occurrence of a given number. [Hint: You can use while loop here]
// Sample Data
// Input:
// Array: [1,2,3,4,5,6,7,8,9,10,11,12]
// Number: 8
// Output:
// 3

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

const findingEvenNumberInArray = (inputNum, arr) => {
    let resultEvenArray = arr.filter(num => {
        return num %2 == 0;
    });
    let result = [];
    for(let i = 0; i < resultEvenArray.length; i++) {
        if(resultEvenArray[i] == inputNum) {
            break;
        }
        result.push(resultEvenArray[i]);
        
    }
    return result.length;
}

console.log(findingEvenNumberInArray(8 ,arr));

// Q4. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// Sample Data
// Input:
// Numbers from 0 to 1000
// Output:
// 233168

const addingSumUnder1000 = (num1, num2) => {
    let sum = 0;
    let i = 0;
    while (i < 1000) {
        if (i % num1 == 0 || i % num2 == 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}

console.log(addingSumUnder1000(3,5));


// Q5. Write a JavaScript program which iterates the integers from 1 to 15. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// Sample Data
// Input:
// Numbers from 0 to 15
// Output:
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...

const fizzBuzzGenerator = () => {
    let i = 0;
    while(i <= 15) {
        if(i % 3 == 0) {
            if (i % 3 == 0 && i != 3) {
                console.log(i + " FizzBuzz");
            } else {
                console.log(i + ' Fizz');
            } 
        } else if (i % 5 == 0) {
            if (i % 5 == 0 && i != 5) {
                console.log(i + " FizzBuzz");
            } else {
                console.log(i + " Buzz");
            } 
        } else {
            console.log(i + " ");
        }
        i++;
    }
}

fizzBuzzGenerator();
