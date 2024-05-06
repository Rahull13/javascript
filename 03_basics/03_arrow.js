const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function testing(){
//     let username = "tra"
//     console.log(this.username); // undefined
// }

// testing()

// const chai = function () {
//     let username = "rews"
//     console.log(this); // undefined
// }

const chai = () => {
    let username = "rews"
    console.log(this);
}

// chai()

// Explesit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implesit mathod
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "rahul"})


console.log(addTwo(3, 4));