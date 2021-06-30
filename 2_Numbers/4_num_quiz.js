// Q. Answer the following questions. Also, explain why do you think that your answer is
// correct.
// 1. console.log(toString(100))
// 2. console.log(parseInt('44'))
// 3. console.log(parseInt('22.222'))
// 4. console.log(parseInt('Banana'))
// 5. console.log(parseFloat(12))
// 6. console.log(parseFloat(13.3))
// 7. var num1 = 10; console.log(num1.toFixed(2))
// 8. var num1 = 15.456789; console.log(num1.toFixed())
// 9. var num1 = 15.456789; console.log(number.toFixed(2))
// 10.var num1 = 15.456789; console.log(num1.toFixed(3))

console.log(toString(100));
// answer should be "100" and the datatype should be string since we used the tostring built in function.

console.log(parseInt('44'));
// answer should 44 and the datatype should be integer since it parse into the integer.

console.log(parseInt('22.222'));
//  answer should be 22 and the datatype should be integer since it parse into the integer. not a float.

console.log(parseInt('Banana'));
// answer should be NaN since you are converting string words into numbers

console.log(parseFloat(12));
// answer should be still 12 since you passed 12 instead of "12.222";

console.log(parseFloat(13.3));
// answer should be still 13.3 since you passed 13.3 which is already float;

var num1 = 10; 
console.log(num1.toFixed(2));
//  answer should be 10.00 since you are asking to round upto 2 decimal places of 10;

var num2 = 15.456789; 
console.log(num2.toFixed());
// answer should be 15 since you are asking to round up to 0 decimal places.

var num3 = 15.456789; 
console.log(num3.toFixed(2));
// answer should be 15.46 since you are asking to round up to 2 decimal places.

var num4 = 15.456789; 
console.log(num4.toFixed(3));
// answer should be 15.457 since you are asking to round up to 3 decimal places.