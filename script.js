const minusButton = document.querySelector("[data-minus]");
const valueBox = document.querySelector("[data-box]");
const plusButton = document.querySelector("[data-plus]");
const multiplicator2x = document.querySelector("[data-multiplicator-2x]");
const multiplicator5x = document.querySelector("[data-multiplicator-5x]");
const achievement1 = document.querySelector("[data-achievement-1]");
const achievement2 = document.querySelector("[data-achievement-2]");
const achievement3 = document.querySelector("[data-achievement-3]");
const achievement4 = document.querySelector("[data-achievement-4]");
const achievement5 = document.querySelector("[data-achievement-5]");
const achievement6 = document.querySelector("[data-achievement-6]");
const achievement7 = document.querySelector("[data-achievement-7]");
const achievement8 = document.querySelector("[data-achievement-8]");
const achievement9 = document.querySelector("[data-achievement-9]");


let value = valueBox.value;
let state = false;

plusButton.addEventListener('click', () => {
    if (state == false) {
        value = ++value;
        valueBox.value = value;
    }
    else if (value == 0 && state == true) {
        value = ++value;
        valueBox.value = value;
    }
    else if (value < 0 && state == true) {
        value = value + -value;
        valueBox.value = value;
    }
    else {
        value = value*2;
        valueBox.value = value;
    }
});

minusButton.addEventListener('click', () => {
    if (state == false) {
        value = --value;
        valueBox.value = value;
    }
    else if (value === 0 && state == true) {
        value = --value;
        valueBox.value = value;
    }
    else if (value > 0 && state == true) {
        value = value - value;
        valueBox.value = value;
    }
    else {
        value = value*2;
        valueBox.value = value;
    }
})

multiplicator2x.addEventListener('click', () => {
    if (state == false) {
        state = true;
        multiplicator2x.textContent = "Deactivate 2x multiplicator";
    }
    else {
        state = false;
        multiplicator2x.textContent = "Activate 2x multiplicator";
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 10) {
        achievement1.style.display = 'flex';
    }
    else {
        achievement.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 20) {
        achievement2.style.display = 'flex';
    }
    else {
        achievement2.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 50) {
        achievement3.style.display = 'flex';
    }
    else {
        achievement3.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 100) {
        achievement4.style.display = 'flex';
    }
    else {
        achievement4.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 500) {
        achievement5.style.display = 'flex';
    }
    else {
        achievement5.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 1000) {
        achievement6.style.display = 'flex';
    }
    else {
        achievement6.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 5000) {
        achievement7.style.display = 'flex';
    }
    else {
        achievement7.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 10000) {
        achievement8.style.display = 'flex';
    }
    else {
        achievement8.style.display = 'none';
    }
})

plusButton.addEventListener('click', () => {
    if (valueBox.value >= 125000000) {
        achievement9.style.display = 'flex';
    }
    else {
        achievement9.style.display = 'none';
    }
})