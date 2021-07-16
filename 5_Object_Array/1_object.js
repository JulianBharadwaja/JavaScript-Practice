// data more complex, collection of things, list of scores, primitive data types => objects
// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
// JavaScript object is a standalone entity that holds multiple values in terms of properties and methods. Object property stores a literal value and method represents function. An object can be created using object literal or object constructor syntax.
var mCars = {
    "p1": "350 kmph",
    "gallardo": '320 kmph',
    "veyron": '409 kmph',
    "agera" : '429 kmph',
}

console.log(mCars);
console.log(typeof(mCars));

var mAgera = {
    name: "Agera",
    manufacturer: {
        name: "Koenigsegg",
        location: "Sweden",
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function() {
        setTimeout(function() {
            console.log('Car Stopped');
        }, 5000)
    }
}

console.log(mAgera.name)
console.log(mAgera.topSpeed)
console.log(mAgera.manufacturer)
console.log(mAgera.manufacturer.name)
console.log(mAgera.applyBrakes())