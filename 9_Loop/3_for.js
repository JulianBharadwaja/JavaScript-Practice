// Q1. Write a JavaScript program to encode a message in the language which hackers
// use to communicate.
// Example
// Hackers write "javascript is cool" as "j4v45cr1pt 15 c00l"
// Instructions:
// The program should replace all 'a' with '4', 'e' with '3', 'i' with '1', 'o' with '0' and 's' with '5'.
// String to convert:
// 'Optimism is the faith that leads to achievement. Nothing can be done without hope and
// confidence. '

let hackerMSG = 'j4v45cr1pt 15 c00l';

const hackerMsgEncoder = (msg) => {
    let enMsg = msg;
    console.log(enMsg)
    for(let i = 0; i < enMsg.length; i++) {
        if (enMsg[i] == '4') {
            enMsg = enMsg.replace('4', 'a');
        } else if (enMsg[i] == '3'){
            enMsg = enMsg.replace('3', 'e');
        } else if (enMsg[i] == '5'){
            enMsg = enMsg.replace('5', 's');
        } else if (enMsg[i] == '1'){
            enMsg = enMsg.replace('1', 'i');
        } else if (enMsg[i] == '0'){
            enMsg = enMsg.replace('0', 'o');
        } 
    }
    return enMsg;
}
// hackerMsgEncoder(hackerMSG);
console.log(hackerMsgEncoder(hackerMSG));

// Q2. Write a JavaScript program to find how many vowels are there in the sentence.
// Sentence:
// Good, better, best. Never let it rest. 'Til your good is better and your better is
// best.
// Output:
// Number of vowels = 25

let message = "GOod, better, best. Never let it rest. 'Til your good is better and your better is best";

const vowelCounter = (msg) => {
    let counter = 0;
    for(let i = 0; i < msg.length; i++) {
        if (msg[i] == 'a' || msg[i] == 'A' || msg[i] == 'e' || msg[i] == 'E' || msg[i] == 'i' || msg[i] == 'I' || msg[i] == 'o' || msg[i] == 'O' || msg[i] == 'u' || msg[i] == 'U') {
            counter++;
        }
    }
    return 'Number of vowels = ' + counter;
}

console.log(vowelCounter(message));

// Q3. Write a JavaScript program which accepts a string as input and swap the case of
// each character.
// [ Hint: You can create two string variables of all alphabets in lowercase(a-z) and in
// upper
// case(A-Z). ]
// Sample Data
// Input:
// 'The Quick Brown Fox'
// Output:
// 'tHE qUICK bROWN fOX'

let messyMSG = 'ThE QuIck BrOwN FoX';
const caseChanger = (msg) => {
    let changeMsg = msg;
    let newMsg = '';
    for(let i = 0; i < changeMsg.length; i++) {
        if(changeMsg[i] == changeMsg[i].toLowerCase()) {
            newMsg += changeMsg[i].toUpperCase();
        } else {
            newMsg += changeMsg[i].toLowerCase();
        }
    }
    console.log(newMsg);
}
caseChanger(messyMSG);

// Q4. Write a JavaScript for loop that will iterate from 0 to 10. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Output:
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

const evenOddWriter = () => {
    for(let i = 0; i < 11; i++) {
        if(i % 2 == 0) {
            console.log(i + ' is an even.');
        } else {
            console.log(i + ' is an odd.');
        }
    }
}

// evenOddWriter();

// Q5. Write a JavaScript function that will reverse all the words which are of odd length.
// The even length words are not changed.
// Sample Data
// Input:
// ‘There is exactly one space between each word and no punctuation is used.’
// Output:
// "erehT si yltcaxe eno ecaps neewteb hcae drow dna on noitautcnup si used“

let directMSG = 'There is exactly one space between each word and no punctuation is used';

const reverseChanger = (msg) => {
    let msgArray = msg.split(' ');
    console.log(msgArray);
    
    let newArray = [];
    for(let i = 0; i < msgArray.length; i++) {
        let newWord = '';
        for(let j = msgArray[i].length-1; j >= 0; j--) {
        
            newWord += msgArray[i][j];
            
        }
        newArray.push(newWord);
    }
    let msgChanged = newArray.join(' ');
    return msgChanged;
}

console.log(reverseChanger(directMSG));