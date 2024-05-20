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