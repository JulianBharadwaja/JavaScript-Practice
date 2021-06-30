var mNum;
console.log(mNum); //result undefined
var mNum = null;
console.log(mNum); //result null

console.log(undefined == null); //true
console.log(undefined === null); //false null is a special value meaning "no value". null is a special object because typeof null returns 'object'. On the other hand, undefined means that the variable has not been declared, or has not been given a value.
