const textScreen = document.querySelector(".text");
let currentInput = "";

function main(){

}



// Display numbers/operator on screen
function display(number) {

    // Prevents multiple operators
    if (isNaN(number) && !isDecimal(number)) {
        if (currentInput !== "" && !isOperator(currentInput.charAt(currentInput.length - 1))) {
            currentInput += number;  
        }
    } else if (isDecimal(number)) {
        if (!currentInput.includes(".")) {
            currentInput += number;
        }
    } else {
        currentInput += number;
    }
    textScreen.innerHTML = currentInput;
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

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function isDecimal(char) {
    return char === ".";
}

main()