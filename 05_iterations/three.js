// for of

const arry = [1, 2, 3, 4, 5]

for (const num of arry) {
    // console.log(num);
}

const greetings = "Helo World!"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ': ', value);
}

const myObject = {
    'Game1': 'NFS',
    'Game2': 'Mario'
}

// for (const [key, value] of myObject) {
//     console.log(key, ': ', value);
// } 
// For of is not working on Object