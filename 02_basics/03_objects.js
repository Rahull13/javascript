// Singleton
// Object.create (This is the method to create object)

// Object Literals

const mySym = Symbol("key1") // Symbol declaration

const JsUser = {
    name: "Rahul",
    "full Name": "Rahul 123",
    [mySym]: 'Sybol1',
    age: '23',
    location: 'abd',
    email: 'rahul@test.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "test@test.com"
// Object.freeze(JsUser)
JsUser.email = "test"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello All");
}
JsUser.greetingTwo = function(){
    console.log(`Hello All, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());