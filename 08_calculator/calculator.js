// Testing SSH key
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, value) => acc + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, value) => acc * value, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let res = [];
  while (num != 0) {
    res.push(num); // Store values on reverse order
    num--; // Subtracts factorial number until zero
  }
  return res.reduce((acc, value) => {
    return acc * value; // Multiplies all reversed array values
  }, 1);// Starts with 1 instead of 0, since this is not a sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
