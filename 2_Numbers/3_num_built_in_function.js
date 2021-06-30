var num1 = 10;
var stringNum = "20.2";
var strWord = 'ABC';

// toString() number as input and returns a string.
console.log(num1.toString());
console.log(typeof(num1.toString()));

// parseInt() string numeral as input and returns a number
console.log(parseInt(stringNum));
console.log(parseInt(strWord));

// parseFloat() string numeral as an input and returns a floating number
console.log(parseFloat(stringNum));

// toFixed() takes floating number and rounds it off to given position
var num2 = 8.46318;
console.log(num2.toFixed());
console.log(num2.toFixed(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(4));