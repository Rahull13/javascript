// For in

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    RB: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py']

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} 
// For in loop not working on Map