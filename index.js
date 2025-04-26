const textScreen = document.querySelector(".text");
const answerScreen = document.querySelector(".answer");
let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let isUsed = false;


function main(){

}

// Display numbers/operator on screen
function display(number) {
    if (number === "." && currentInput.includes(".")) return;
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else{
        currentInput += number;
    }

    textScreen.innerHTML = currentInput;

    if (operator === null) {
        firstNumber = currentInput;
    } else {
        secondNumber = currentInput;
    }
}

function setOperator(op) {
    if (firstNumber === null) return;

    if (operator !== null && firstNumber !== null && secondNumber !== null) { 
        equal()
    }

    operator = op;
    currentInput = '';
}

function equal() {
    if (operator !== null && currentInput !== '') {
        secondNumber = currentInput;
    }

    if (operator !== null && firstNumber !== null && secondNumber !== null) {
        result = operate(operator, firstNumber, secondNumber);
        firstNumber = result.toString();
        currentInput = firstNumber;
        secondNumber = null;
        operator = null;
        textScreen.innerHTML = result;
    }
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            return num2;
    }

    return parseFloat(result.toFixed(10));
}

// Clears display
function clearDisplay() {
    currentInput = "";
    textScreen.innerHTML = "";
}

// Deletes text
function deleteText() {
    currentInput = currentInput.slice(0, -1);
    textScreen.innerHTML = currentInput;  
}

// Adds two numbers
function add(x, y) {
    return x + y;
}

// Subtract two numbers
function subtract(x, y) {
    return x - y; 
}

// Multiplies two numbers
function multiply(x, y) {
    return x * y;
}

// Divides two numbers
function divide(x, y) {
    return x / y;
}

function checksZero(input) {
    if (input.charAt(0) === "0" && input.charAt(1) !== ".") return true;

    return false;
}

main()