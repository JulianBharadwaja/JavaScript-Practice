//  == is a loose type comparison ... it is only compare the value NOT TYPE
if(5 == 5) {
    console.log(true);
}

if(5 == '5') {
    console.log(true);
}

if(4 != '5'){
    console.log(true);
}

// === will also compare type
if(5 === 5) {
    console.log(true);
}

if(5 === '5') {
    console.log(true);
} else {
    console.log(false);
}

if(4 !== '5'){
    console.log(true);
}

if(4 !== 5){
    console.log(true);
}

//  < only compare the value less than > only compare the value greater than
if(4 < 5) {
    console.log(true);
}
if(5 > 4) {
    console.log(true);
}

//  <= only compare the value less than or equal >=  only compare the value greater than or equal

if(4 <= 5) {
    console.log(true);
}
if(5 >= 4) {
    console.log(true);
}

// Logical Operators &&, ||, ! 
// && only true if all the condition true
if (4 < 5 && 6 > 7) {
    console.log("Will never print")
} else {
    console.log("This will print")
}

// || can be true at least one of condition is true
if (4 < 5 || 6 > 7) {
    console.log("This will print")
} else {
    console.log("Will never print")
}

// ! will make it true if the value is false.. and vise visa
if (4 < 5 && !(6 > 7)) {
    console.log("This will print")
} else {
    console.log("Will never print")
}

// Ternary Operator (expression) ? true: false;
(4 < 5) ? console.log("Return true") : console.log("Return False");