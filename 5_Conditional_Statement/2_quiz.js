// Q1. Take the values given below of length and breadth of a rectangle and check if it is
// square or not. Change values and see if your code works or not.
var length=200;
var breadth=200;

if (length + breadth == length*2){
    console.log("This is square");
} else {
    console.log("This is just a rectangle");
}

// Write some code to check which number is greatest. Change values and see if your
// code works or not.

var num1 = 25; 
var num2 = 28; 
var num3 = 29;

if (num1 > num2 && num1 > num3) {
    console.log("Num 1 is the largest number!");
} else if (num2 > num1 && num2 > num3) {
    console.log("Num 2 is the largest number!");
} else {
    console.log("Num 3 is the largest number!");
}

// A school has following rules for grading system:
// MARKS GRADE
// Below 25 F
// 25 to 45 E
// 45 to 50 D
// 50 to 60 C
// 60 to 80 B
// Above 80 A

var enteredMarks = 77;

if (enteredMarks < 25) {
    console.log("F");
} else if (enteredMarks >= 25 && enteredMarks < 45) {
    console.log("E");
} else if (enteredMarks >= 45 && enteredMarks < 50) {
    console.log("D");
} else if (enteredMarks >= 50 && enteredMarks < 60) {
    console.log("C");
} else if (enteredMarks >= 60 && enteredMarks < 80) {
    console.log("B");
} else if (enteredMarks >= 80 && enteredMarks < 100) {
    console.log("A");
} else {
    console.log("Invalid Score!");
}

// A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000.
// Suppose, one unit will cost 100. Change the value of numberOfItemPurchased and print
// total cost for the user.
var numberOfItemPurchased = 11;
var totalPriceofItem = numberOfItemPurchased * 100
if (totalPriceofItem > 1000) {
    console.log("We will give you a 10% discount.")
    var discount = totalPriceofItem * 0.1;
    console.log("Total is " + discount);
} else {
    console.log("Total is ".concat(totalPriceofItem.toString()));
}