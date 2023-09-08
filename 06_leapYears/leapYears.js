const leapYears = function (year) {
  let validation = false;
  if (year % 4 === 0 && year % 100 !== 0) {
    validation = true;
  } else if (year % 400 === 0) {
    validation = true;
  }
  return validation;
};

// Do not edit below this line
module.exports = leapYears;
