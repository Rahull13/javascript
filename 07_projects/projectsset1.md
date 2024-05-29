# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
console.log('Rahul')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightmsg = document.querySelector('#weightmsg')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        if(bmi < 18.6){
            weightmsg.innerHTML = `<span>Under Weight</span>`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            weightmsg.innerHTML = `<span>Normal Range</span>`
        }
        else if(bmi > 24.9){
            weightmsg.innerHTML = `<span>Overweight</span>`
        }
        // Show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
    
})
```