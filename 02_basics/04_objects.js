// Singleton

// const tinderUser = new Object() // This is singleton object

const tinderUser = {} // This is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammqws"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sub@aws.coms",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "parikh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "qa@as.cs"
    },
    {
        id: 1,
        email: "qa@as.cs"
    },
    {
        id: 1,
        email: "qa@as.cs"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);

//  {
//     "name": "rahul",
//     "coursename": "JS",
//     "price": "free",
//  }