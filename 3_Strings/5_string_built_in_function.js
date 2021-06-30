var exampleString = "This is JavaScript Tutorial."
 
// toUpperCase() - It coverts our string -> uppercase characters.
console.log(exampleString.toUpperCase());

// toLowerCase() - It converts our string -> lowercase characters.
console.log(exampleString.toLowerCase());

// concat() - It merges two or more strings.
var anotherString = "This is another string."
console.log(exampleString.concat(anotherString));
console.log(exampleString.concat(" ", anotherString, "!"));

// concatenation with +

console.log(exampleString + anotherString);

// trim() -> It removes extra spaces
var extraSpaceString = '                         mystring                      ';
console.log(extraSpaceString.trim());

var extraSpaceString2 = '        my string is normal           ';
console.log(extraSpaceString2.trim());


// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string';
console.log(charAtExampleString.charAt(5));
console.log(charAtExampleString.charAt(11));


// split() -> splits our string on the basis of the arguments passed and returns array.

var sampleString = "this is my sample string";
console.log(sampleString.split(' '));
console.log(sampleString.split());

var sampleString2 = "this,is,my,sample,string";
console.log(sampleString2.split(','));