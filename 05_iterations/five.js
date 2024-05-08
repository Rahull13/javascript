// For each loop..

const coding = ['js', 'java', 'ruby', 'cpp', 'python']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCOdding = [
    {
        languageName: 'Java',
        languageFile: 'JS'
    },
    {
        languageName: 'Javascript',
        languageFile: 'Js file'
    },
    {
        languageName: 'python',
        languageFile: 'py'
    }
]

myCOdding.forEach( (item)=>{
    console.log(item.languageName);
})