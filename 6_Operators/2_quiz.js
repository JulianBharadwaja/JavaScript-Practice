// What will be printed in the console?
var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 1 + 5;
var num4 = num3 / 4;
console.log(num2 + " " + num4); // 1.5 1.5 <=string

// What will be printed in the console?
var a = 1;
var b = 2;
var c;
var d;
c = ++b; //3
d = a++; //2
c++; //4
b++; //4
++a; //3
console.log(a + " " + b + " " + c); // 3 4 4

// What will be printed in the console?
var input = 7;
var output1 = ++input + ++input + ++input; // 8 + 9 + 10 = 27
var output2 = input++ + input++ + input++; // 10 11 12 = 33
var output3 = input++ + ++input + input++; // 13 15 15 = 40
console.log(output1 + ' ' + output2 + ' ' + output3); // 27 33 43