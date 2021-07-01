// Q. Answer the following questions. Also, explain why do you think that your answer is
// correct.
// var str1 = 'Today is';
// var str2 = ' A beautiful day '
// var str3 = ' In Hawaii. '
// Result = 'Today is a beautiful day in Hawaii.'
// 1. Use the str1, str2, str3 to create the Result string. Keep the extra spaces, lowercase
// and uppercase letters in mind.

var str1 = 'Today is';
var str2 = ' A beautiful day '.toLowerCase()
var str3 = ' In Hawaii. '.slice(2);

console.log(str1.concat(str2, 'i',str3));