const repeatString = function (string, num) {
  let repStr = "";
  if (num < 0) {
    string = "ERROR";
    repStr = string;
  } else {
    while (num > 0) {
      repStr += string;
      num--;
    }
  }

  return repStr;
};

// Do not edit below this line
module.exports = repeatString;
