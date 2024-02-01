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
let pressedButtonsText = "";
let num1 = ""; // Store the first number of the equation
let num2 = ""; // Store the second number of the equation
let operator = ""; // Store the operator of the equation
let calcText;

// Loop to create rows
for (let i = 0; i < row; i++) {
    // Create a row element
    const rowElement = document.createElement("div");
    rowElement.classList.add("container-row");

    container.appendChild(rowElement);

    if (i === 0) {
        const columnElement = document.createElement("div");
        columnElement.classList.add("container-column");

        calcText = document.createTextNode("Display");
        columnElement.appendChild(calcText);

        rowElement.appendChild(columnElement);

    } else {
        for (let j = 0; j < column; j++) {
            const columnElement = document.createElement("button");
            columnElement.classList.add("container-column");

            // Calculate the button number
            const buttonNumber = i * column + j + 1;

            // Create a text node with the desired text based on the button number
            let buttonText;
            switch (buttonNumber) {
                case 1:
                    break;
                case 1:
                    break;
                case 1:
                    break;
                case 1:
                    break;
                case 5:
                    buttonText = document.createTextNode(1);
                    break;
                case 6:
                    buttonText = document.createTextNode(2);
                    break;
                case 7:
                    buttonText = document.createTextNode(3);
                    break;
                case 8:
                    buttonText = document.createTextNode("AC");
                    break;
                case 9:
                    buttonText = document.createTextNode(4);
                    break;
                case 10:
                    buttonText = document.createTextNode(5);
                    break;
                case 11:
                    buttonText = document.createTextNode(6);
                    break;
                case 12:
                    buttonText = document.createTextNode("+");
                    break;
                case 13:
                    buttonText = document.createTextNode(7);
                    break;
                case 14:
                    buttonText = document.createTextNode(8);
                    break;
                case 15:
                    buttonText = document.createTextNode(9);
                    break;
                case 16:
                    buttonText = document.createTextNode("x");
                    break;
                case 17:
                    buttonText = document.createTextNode(".");
                    break;
                case 18:
                    buttonText = document.createTextNode(0);
                    break;
                case 19:
                    buttonText = document.createTextNode("=");
                    break;
                case 20:
                    buttonText = document.createTextNode("/");
                    break;
                default:
                    buttonText = document.createTextNode(""); // Set default text if needed
            }

            // Append the text node to the column element
            columnElement.appendChild(buttonText);

            // Add click event listener to each button
            columnElement.addEventListener("click", function() {
                if (buttonText.nodeValue === "AC"){
                    pressedButtonsText = "";
                }
                else if(buttonText.nodeValue === "="){
                    if (pressedButtonsText.includes("+") || pressedButtonsText.includes("-") || pressedButtonsText.includes("x") || pressedButtonsText.includes("/")) {

                        const equationParts = pressedButtonsText.match(/(\d+|\D)/g);

                        // Extract num1, operator, and num2
                        num1 = equationParts[0];
                        operator = equationParts[1];
                        num2 = equationParts[2];

                        // Calculate the result
                        pressedButtonsText = operate(parseFloat(num1), parseFloat(num2), operator);
                        console.log(pressedButtonsText);
                    }

                }
                else{
                    pressedButtonsText += buttonText.nodeValue;
                    console.log(pressedButtonsText);
                }
                calcText.nodeValue = pressedButtonsText;
            });

            // Append the column element to the row element
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