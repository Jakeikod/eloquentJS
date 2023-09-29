"using strict"

//Rename to every to do tests
function everyLoop(array, test) {
  for (let element of array){
     if (!test(element)){
        return false;
       }
 }
 return true;
}

// some gör a || b
// a && b equals !(!a || !b)
function every(array, test) {
 return !array.some(element => !test(element))
}
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true