const display = document.querySelector('#display')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const input = document.querySelector('#number')

let number = 0
display.textContent = number

plus.addEventListener('click', function() {
    number = number + parseInt(input.value);
    display.textContent = number;
    if (number < 0) {
        display.style.color = 'red'
    } else {
        display.style.color = 'black'
    }
})

minus.addEventListener('click', function() {
    number = number - parseInt(input.value);
    display.textContent = number;
    if (number < 0) {
        display.style.color = 'red'
    } else {
        display.style.color = 'black'
    }
})