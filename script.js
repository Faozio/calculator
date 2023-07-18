// Get the display element
const display = document.querySelector('.display');

// Get all number buttons
const numberButtons = document.querySelectorAll('.number');

// Get all operator buttons
const operatorButtons = document.querySelectorAll('.operator');

// Clear button
const clearButton = document.querySelector('.clear');

// Equals button
const equalsButton = document.querySelector('.equals');

// Variable to store the current calculation
let calculation = '0';

// Function to update the display
function updateDisplay() {
  display.textContent = calculation;
}

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (calculation === '0') {
      calculation = button.value;
    } else {
      calculation += button.value;
    }
    updateDisplay();
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculation += button.value;
    updateDisplay();
  });
});

// Clear button event listener
clearButton.addEventListener('click', () => {
  calculation = '0';
  updateDisplay();
});

// Equals button event listener
equalsButton.addEventListener('click', () => {
  calculation = eval(calculation);
  updateDisplay();
  calculation = '0';
});