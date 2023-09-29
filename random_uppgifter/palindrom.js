"use strict"
const inArr = ["test", "kajak", "tillit", "lugn", "danskebank", "naturrutan"]

function findPalindrome(stringArrIn) {
    stringArrOut = [];
    stringArrIn.forEach(element => {
        let elementReversed = element.split('').reverse().join('');
        if (element === elementReversed) {
            stringArrOut.push(element)
        }
    });
    return stringArrOut;
}

console.table(findPalindrome(inArr))

function getPalindrome(inArr) {
    let palindromes = []
    inArr.forEach(element => (element === element.split('').reverse().join('')) ? palindromes.push(element) : null)
    return palindromes
}
console.table(getPalindrome(inArr))