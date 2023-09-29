"using strict"

let arrays = [[1, 2, 3], [4, 5], [6]];

let oneArray = arrays.reduce((a, b) => a.concat(b))
console.log(oneArray)

