const name = "yogo"
const repoCount = 50

//console.log(name + repoCount);

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation backtrick

const gameName = new String ("yogo-yg"); // string is an object with key value pair, not array

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const newString = gameName.substring(0,4)
console.log(newString)

const slicedString = gameName.slice(-8,4)
console.log(slicedString)