const sumAll = function(start, finish) {
    let sum = 0;
    let finalArr = [];

    if (start < 0 || finish < 0 || typeof(start) != "number" || typeof(finish) != "number") {
        return "ERROR";
    } else if (start > finish) {
        for (let i = finish; i <= start; i++) {
            finalArr.push(i);
        }
        for (let i = 0; i < finalArr.length; i++) {
            sum += finalArr[i];
        }
    } else {
        for (let i = start; i <= finish; i++) {
            finalArr.push(i);
        }
        for (let i = 0; i < finalArr.length; i++) {
            sum += finalArr[i];
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
