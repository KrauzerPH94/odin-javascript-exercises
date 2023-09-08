const convertToCelsius = function (fahrenheit) {
  // F to C formula => (temperature -32) / 1.8
  fahrenheit = (fahrenheit - 32) / 1.8; // Converts to Fahrenheit
  return +(Math.round(fahrenheit * 100) / 100).toFixed(1); // Rounds the decimal
};

const convertToFahrenheit = function (celsius) {
  // C to F formula => (temperature *1.8) +32
  celsius = celsius * 1.8 + 32; // Converts to Celsius
  return +(Math.round(celsius * 100) / 100).toFixed(1); // Rounds the decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
