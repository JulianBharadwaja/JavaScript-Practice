var myFirstString = "This is a string for JavaScript string functions.";

// Returns the length of the string.
console.log(myFirstString.length);

// Find index of a string indside another string.
console.log(myFirstString.indexOf('JavaScript'));
// index of string start from 0
console.log(myFirstString.indexOf("This"));

// Find last index of a string inside another string.
console.log(myFirstString.lastIndexOf("JavaScript"));
console.log(myFirstString.lastIndexOf('This'));

// Get a part of string -> slice(start, end);
console.log(myFirstString.slice(0,13));
// This will get from the last position.
console.log(myFirstString.slice(-10));
// This will ignore first five index and return all.
console.log(myFirstString.slice(5));


// Get sub string function -> substr(startPos, length)
console.log(myFirstString.substr(0,4));
console.log(myFirstString.substr(21,10));
// If length is not defined, it will return all the string from the starting position.
console.log(myFirstString.substr(21));