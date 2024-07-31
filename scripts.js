let display = document.getElementById('display');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

let buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let result = '';

display.textContent = '0';

buttons.forEach(button => {button.addEventListener('click',() => handleButtonClick(button.textContent))})

clear.addEventListener('click',() => clearDisplay());
equals.addEventListener('click',() => completeCalculation());

function handleButtonClick(value) {
    if (value >= '0' && value <= '9') {
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === '.' && !currentInput.includes('.')) {
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === '↻') {
        clearDisplay();
    } else {
        if (currentInput !== '') {
            if (operator !== '') {
                completeCalculation();
            } else {
                result = currentInput;
            }
        }

        operator = value;
        currentInput = '';
        updateDisplay(result + ' ' + operator + ' ');
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = '';
    display.textContent = '0';
}

function completeCalculation() {
    if (currentInput !== '') {
        if (operator === '+') {
            result = (parseFloat(result) + parseFloat(currentInput)).toString();
        } else if (operator === '-') {
            result = (parseFloat(result) - parseFloat(currentInput)).toString();
        } else if (operator === 'x') {
            result = (parseFloat(result) * parseFloat(currentInput)).toString();
        } else if (operator === '÷') {
            result = (parseFloat(result) / parseFloat(currentInput)).toString();
        } else {
            result = currentInput;
        }
    }

    currentInput = '';
    operator = '';
    updateDisplay(result);
}

function updateDisplay(text) {
    display.textContent = text || '0';
}