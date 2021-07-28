console.log('Script is loaded!');

console.log(document.getElementById("topbar"));
// return you a html element itself. fastest

console.log(document.getElementsByClassName("js-heading"))
// return a html collection. fastest

console.log(document.getElementsByTagName('p'));
// return a html collection

console.log(document.querySelectorAll('#topbar a'))
// return a nodelist

console.log(document.querySelector("#topbar a"))
// return first item;

let countdownElement = document.getElementById('js-count');
let initialCountDown = countdownElement.innerHTML;
let backgroundColorElement = document.getElementById('content');

let interval = setInterval(() => {
    initialCountDown = initialCountDown > 1 ? initialCountDown -= 1 : 10;
    countdownElement.innerHTML = initialCountDown;
    let backColor = initialCountDown % 2 === 0 ? "rgb(136, 158, 255)" : "rgb(223, 255, 136)";
    backgroundColorElement.style.backgroundColor = backColor;
    countdownElement.style.fontSize = initialCountDown * 10 + "px";
    backgroundColorElement.style.width = initialCountDown * 10 + "%";

    // if(initialCountDown <= 1) {
    //     clearInterval(interval)
    // } clearing interval
}, 1000); 

console.log(countdownElement);   
console.log(countdownElement.innerHTML);