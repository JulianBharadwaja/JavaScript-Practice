// Q. Answer the following questions. Also, explain why do you think that your answer is
// correct.
// var mStr = "This is my test string to practice the JavaScript string function concepts.
// This is gonna be fun."
// 1. Find the length of the first sentence in the string.
// 2. Find the length of the second sentence in the string.
// 3. Find the first and last occurrence of the word "This".
// 4. Find the sub-string with length 12 from the START of the string mStr.
// 5. Find the sub-string with length 12 from the END of the string mStr.

var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."

// 1. Find the length of the first sentence in the string.
console.log(mStr.indexOf('.'));
console.log(mStr.slice(0, 75).length);
// answer should be 75. You can just add +1 to the indexOf after you get the result. length number start from 1 .. while index start from 0.


// 2. Find the length of the second sentence in the string.
console.log(mStr.slice(74).length);
// answer should be 23. Since I used my last result of first '.' and I use slice method and length to find the answer.


// 3. Find the first and last occurrence of the word "This".
console.log(mStr.indexOf('This'));
console.log(mStr.lastIndexOf('This'));
// answer is 0 and 76.


// 4. Find the sub-string with length 12 from the START of the string mStr.
console.log(mStr.substr(0, 12));
// answer is This is my t


// 5. Find the sub-string with length 12 from the END of the string mStr.
console.log(mStr.substr(-12));
// answer is onna be fun.