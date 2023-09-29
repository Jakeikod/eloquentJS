"using strict"

function loop(inVal, testFunc, upFunc, bodyFunc){
    for(let loopVal = inVal; testFunc(loopVal); loopVal = upFunc(loopVal)){
        bodyFunc(loopVal);
    }
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1