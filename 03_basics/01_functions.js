// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Hello"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rahul"))
// console.log(loginUserMessage("Rahul"))

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 5000, 2000))

const user = {
    username: "rah",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 300
})

const myNewArray = [200, 300, 400]
function returnScondValue(getArray){
    return getArray[2]
}
// console.log(returnScondValue(myNewArray));
console.log(returnScondValue([
    200, 300, 500
]));
