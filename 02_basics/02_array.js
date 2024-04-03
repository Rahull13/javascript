const marvel_heros = ["Thor", "Ironman", "Spiderman"]

const dc_heros = ["Superman", "Batman", "Wonder Women"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
// const allHeros = marvel_heros.concat(dc_heros) // Merge 2 arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //Merge 2 or more arrays in one.. Also this operator name was 'Spread Operator'...

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // Merge all array and sub array... Also we can give a depth value instade of infinity value like 1,2,3,4....
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Rahul")) // answer is 'false'... Asking to system that the value is array or not.
console.log(Array.from("Rahul")) // Convert Rahul form individual Array form
console.log(Array.from({name: "Rahul"})) // interesting... Output is '[]'...

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));