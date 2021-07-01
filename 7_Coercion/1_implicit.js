// Type coercion is to convert one type to another type of data type. this can be done programmatically by user or automatically by js. Implicit (JS) Explicit(User)

var mStr = 'Hello';
var num = 5;
var sum = mStr + num;
console.log(sum);

console.log("hola" + true);
console.log(typeof(null + 'hola'));

var newValue = +'2';
console.log(typeof(newValue));

if(''){ //anything expect for 0, null, undefined,'' will return true
    console.log('True');
} else {
    console.log('False');
}