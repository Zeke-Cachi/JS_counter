let minus = document.getElementById('minus-button');
let plus = document.getElementById('plus-button');
let display = document.getElementById('display');

minus.addEventListener('click', () => {
    display.innerText--;
})

plus.addEventListener('click', () => {
    display.innerText++;
}) 