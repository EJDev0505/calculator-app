const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calculator-input");
const clear = document.querySelector("#clear");
const deleteButton = document.querySelector("#deletebutton");
const divideButton = document.querySelector("#divide");
const subtractButton = document.querySelector("#subtract");
const additionButton = document.querySelector("#addition");
const multiplyButton = document.querySelector("#multiplyX");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === "=") {
            calculateResult();
        } else if (button.textContent === "AC") {
            clearDisplay();
        } else if (button === deleteButton) {
            deleteLastChar();
        } else if (button === divideButton || button === subtractButton || button === additionButton || button === multiplyButton) {
            handleOperation(button.textContent);
        } else {
            display.textContent += button.textContent;
        }
    });
});

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}

function clearDisplay() {
    display.textContent = "";
}

function deleteLastChar() {
    display.textContent = display.textContent.slice(0, -1);
}

function handleOperation(operation) {
    const lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        display.textContent = display.textContent.slice(0, -1) + operation;
    } else {
        display.textContent += operation;
    }
}