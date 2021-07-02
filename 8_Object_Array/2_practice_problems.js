// Q1. We have an object of customers for our food delivery app with the information
// about their past orders with order values.
// Write a JavaScript program to give a "Premium Membership" to the customer if the
// customer has made at least 5 orders of the minimum value of 20.
// The customers and their past order history is given below:
var customers_data = {
    'Ben10': [22, 30, 11, 17, 15, 52, 27, 12],
    'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
    'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57],
}

// console.log(customers_data.Ben10.length);
// console.log(Object.keys(customers_data));

// javascript function for grabbing key of the object and returns into array
var keyCus = Object.keys(customers_data)
// console.log(customers_data[keyCus[1]]);


function premium_membership() {
    for(i = 0;i < keyCus.length; i++){
        // console.log(customers_data[keyCus[i]]);
        // console.log(customers_data[keyCus[i]].length);
        var dataLength = customers_data[keyCus[i]].length;
        var dataName = customers_data[keyCus[i]];

        if(dataLength > 5) {

            var newArr = [];

            for(j = 0; j < dataLength; j++) {

                // console.log(dataName[j]);
                if(dataName[j] >= 20){
                    newArr.push(dataName[j]);
                }
                
            }
            if(newArr.length >= 5) {
                console.log(keyCus[i] + ' is premium member.');
            }

            // console.log(newArr);
        }
    }
}

premium_membership();


// Q2. Write a JavaScript program to list the properties of a JavaScript object.
// Sample Data
// Input:
// Object:
// student = {
//  name: "David Rayy",
//  sclass: "VI",
//  rollno: 12
// };
// Output:
// ["name", "sclass", "rollno"]

var student = {
     name: "David Rayy",
     sclass: "VI",
     rollno: 12
};

console.log(Object.keys(student));

// Q4. Write a JavaScript program to get the length of a JavaScript object.
// Sample Data
// Input:
// student = {
//  name : "David Rayy",
//  sclass : "VI",
//  rollno : 12
// }
// Output:
// 3

console.log(Object.keys(student).length);

// Q5. Write a JavaScript program to display the reading status (i.e. display book name,
//     author name and reading status) of the following books.
//     Sample Data
//     Input:
//     library = [
//     {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//     },
//     {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
//     },
//     {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false
//     }];
//     Output:
//     For book with reading status 'true' we can print :
//     'You have already read {book-name} by {author-name}.'
//     For book with reading status 'false' we can print:
//     'You still need to read {book-name} by {author-name}.' 

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];

for (i = 0; i < library.length; i++) {
    // console.log(library[i]);
    // console.log(library[i].readingStatus);
    if(library[i].readingStatus) {
        console.log(`You have already read ${library[i].title} by ${library[i].author}`);
    } else {
        console.log(`You still need to read ${library[i].title} by ${library[i].author}`);
    }
}