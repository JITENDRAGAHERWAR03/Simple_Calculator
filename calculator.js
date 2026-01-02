// let currentDisplay = "";
// document.querySelector("#display").value = currentDisplay;
let display = document.querySelector('#display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function append(character) {
    display.value += character;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}