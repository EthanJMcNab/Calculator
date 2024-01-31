// Creates Body Element
const body = document.querySelector("body");

// Creates and appends the title to Body Element
const titleText = document.createTextNode("Ethan's Calculator!");
const title = document.createElement("h1");
title.appendChild(titleText);
body.appendChild(title);

// Creates and appends the Calculator container
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

// Sets rows and columns
const row = 5; 
const column = 4; 

// Loop to create rows
for (let i = 0; i < row; i++) {
    // Create a row element
    const rowElement = document.createElement("div");
    rowElement.classList.add("container-row");

    container.appendChild(rowElement);

    if (i === 0){
        const columnElement = document.createElement("div");
        columnElement.classList.add("container-column");


        const calcText = document.createTextNode("Display");
        columnElement.appendChild(calcText);

        rowElement.appendChild(columnElement); 
    }
    else {
        for (let j = 0; j < column; j++) {
            const columnElement = document.createElement("div");
            columnElement.classList.add("container-column");
            rowElement.appendChild(columnElement);
            }
    }
}

// Two number variables for caluclation
let number1 = 0;
let number2 = 0;

// Calculate function
function operate(num1, num2, operator){
    if (operator == "+"){
        return add(num1, num2);
    }
    else if (operator == "-"){
        return subtract(num1, num2);
    }
    else if (operator == "x"){
        return multiply(num1, num2);
    }
    else if (operator == "/"){
        return divide(num1, num2);
    }
}

// Math operator functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    // Check if the divisor is not zero to avoid division by zero
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        // Handle division by zero
        console.error("Error: Division by zero");
        return undefined;
    }
}

// Example usage:
const resultAdd = operate(5, 3, "+");
const resultSubtract = operate(8, 4, "-");
const resultMultiply = operate(2, 6, "x");
const resultDivide = operate(10, 2, "/");

console.log("Addition:", resultAdd);
console.log("Subtraction:", resultSubtract);
console.log("Multiplication:", resultMultiply);
console.log("Division:", resultDivide);