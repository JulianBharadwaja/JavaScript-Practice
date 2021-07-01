// Q1. Write a program to print the number of days in a month using a switch case. Change
// the value of monthNumber and check if your code works fine.
// var monthNumber = 3;
// Example:
// monthNumber = 3
// Output:
// Month = March
// Total number of days = 31


var monthNumber = 3;

switch(monthNumber) {
    case 1 : 
        console.log('Month is January');
        console.log('Total Number of Days is 31'); break;
    case 2 : 
        console.log('Month is Feburary');
        console.log('Total Number of Days is 28/29'); break;
    case 3 : 
        console.log('Month is March');
        console.log('Total Number of Days is 31'); break;
    case 4 : 
        console.log('Month is April');
        console.log('Total Number of Days is 30'); break;
    case 5 : 
        console.log('Month is May');
        console.log('Total Number of Days is 31'); break;
    case 6 : 
        console.log('Month is June');
        console.log('Total Number of Days is 30'); break;
    case 7 : 
        console.log('Month is July');
        console.log('Total Number of Days is 31'); break;
    case 8 : 
        console.log('Month is August');
        console.log('Total Number of Days is 31'); break;
    case 9 : 
        console.log('Month is September');
        console.log('Total Number of Days is 30'); break;
    case 10 : 
        console.log('Month is October');
        console.log('Total Number of Days is 31'); break;
    case 11 : 
        console.log('Month is November');
        console.log('Total Number of Days is 30'); break;
    case 12 : 
        console.log('Month is December');
        console.log('Total Number of Days is 31'); break;
    default:
        console.log('There is no such month that you type... try agin');break;
}