const name = "rahul"
const repoCount = 20

// console.log(name + repoCount + "Try"); // Not recommanded

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rahul-p-m')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf(' '))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newSrting1 = '   rahul   '
console.log(newSrting1)
console.log(newSrting1.trim())

const url = 'https://rahul.com/rahul%20pm'
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'));