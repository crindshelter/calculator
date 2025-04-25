const textScreen = document.querySelector(".text");

function main(){

}

// Display numbers/operator on screen
function display(number) {
    textScreen.innerHTML += number;
}

function clearDisplay() {
    textScreen.innerHTML = "";
}

function deleteText() {
    textScreen.innerHTML = textScreen.innerHTML.slice(0, -1);
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


main()