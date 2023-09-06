 reverseString = function(string) {
    let revStr = "";
    let splStr = string.split("");
    for (let i = splStr.length -1; i >= 0; i--) {
        revStr += splStr[i];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
