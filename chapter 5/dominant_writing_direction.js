"using strict"

//läser in scripts.js
const SCRIPTS = require("./scripts");
//console.log(SCRIPTS[2])

//CharacterScript kod
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
       return script;
     }
   }
   return null;
 }

//console.log(characterScript(121));
// → {name: "Latin", …}

//CountBy kod
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  //console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
  // → [{name: false, count: 2}, {name: true, count: 3}]

/* Min alldeles egna kod uwu */
function dominantDirection(text) {
    let writingDirections = countBy(text, char => {
        let writingDirection = characterScript(char.codePointAt(0));
        return writingDirection ? writingDirection.direction : "none";
    }).filter(({name}) => name != "none");
    if (writingDirections.length === 0) return null;

    //let totalLtr = writingDirections.filter(({name})=> name == "ltr").reduce((n, {count}) => n + count, 0)
    //let totalRtl = writingDirections.filter(({name})=> name == "rtl").reduce((n, {count}) => n + count, 0)
    //let totalTtb = writingDirections.filter(({name})=> name == "ttb").reduce((n, {count}) => n + count, 0)

    const {name: dominantDirection} = writingDirections.reduce((dominantDirection, writingDirection) => {
        return (writingDirection.count > dominantDirection.count) ? writingDirection : dominantDirection;
    });

    return dominantDirection;
    
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

console.log(dominantDirection(""));
// → null
let ball = {name: "testText", form: "round"}
const {name: testObj} = ball
console.log(testObj)