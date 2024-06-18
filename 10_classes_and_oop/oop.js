// Object Literals
const user = {
    username: 'Rahul',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got yser details from database');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor Function

// const promiseOne = new Promise() // 'new' is a constructor function
// const date = new Date() // 'new' is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('Rahul', 12, true)
const userTwo = new User('JS', 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

// Notes about 'new' keyword

// step 1 - new object create
// step 2 - construction function call
// step 3 - this keyword injected in 'new'
