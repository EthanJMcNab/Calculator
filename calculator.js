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
const resultAdd = add(5, 3);
const resultSubtract = subtract(8, 4);
const resultMultiply = multiply(2, 6);
const resultDivide = divide(10, 2);

console.log("Addition:", resultAdd);
console.log("Subtraction:", resultSubtract);
console.log("Multiplication:", resultMultiply);
console.log("Division:", resultDivide);