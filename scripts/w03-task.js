/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let input1 = Number(document.querySelector('#add1').value);
    let input2 = Number(document.querySelector('#add2').value);

    let sum = add(input1, input2);
    document.querySelector('#sum').value = sum;
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);  
/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
};
let subtractNumbers = function() {
    let input1 = Number(document.querySelector('#subtract1').value);
    let input2 = Number(document.querySelector('#subtract2').value);

    let difference = subtract(input1, input2);
    document.querySelector('#difference').value = difference;
};
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => {
    return number1 * number2;
  };
  
  let multiplyNumbers = () => {
    let input1 = Number(document.querySelector('#factor1').value);
    let input2 = Number(document.querySelector('#factor2').value);
  
    let product = multiply(input1, input2);
      document.querySelector('#product').value = product;
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  

/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => {
    return dividend / divisor;
  };
  
  let divideNumbers = () => {
    let input1 = Number(document.querySelector('#dividend').value);
    let input2 = Number(document.querySelector('#divisor').value);
  
    let quotient = divide(input1, input2);
    document.querySelector('#quotient').value = quotient;
  };
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  

/* Decision Structure */
let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */
document.querySelector('#array').value = numbers;
numbers.filter(number => number % 2 !== 0);
document.querySelector('#odds').value = odds;

/* Output Evens Only Array */
numbers.filter(number => number % 2 === 0);
document.querySelector('#evens').value = evens;

/* Output Sum of Org. Array */
numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').value = sumOfArray;

/* Output Multiplied by 2 Array */
numbers.map(number => number * 2);
document.querySelector('#multiplied').value = multiply;

/* Output Sum of Multiplied by 2 Array */
multiplied.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').value = sumOfMultiplied;