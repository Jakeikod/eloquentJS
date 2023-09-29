/* Lösning till uppgift 0. Av Jacob Edefors, Jaed2300 , 2023-09-08 */
"use strict";

/* Funktion som skriver ut textfras */
function logText() {
    console.log("hello world");
}

logText();


// Your code here.
/** Counts the amount of bs
 * @param {string} textString
 */
let countBs = textString => countChar(textString, 'B')

function countChar(textString, charToCount){
    let amountOfSameChar = 0;
    for (let x = (textString.length); x >= 0; x--){
        if (textString[x] === charToCount){
            amountOfSameChar++;
        }
    }
    return amountOfSameChar;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled)
