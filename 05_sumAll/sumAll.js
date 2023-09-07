const sumAll = function(start, finish) {
    let sum;
    let range = [];
    for (let i = start; i <= finish; i++) {
        range += start + 1;
    }
    return range;
};

console.log(sumAll(1, 3));

// Do not edit below this line
module.exports = sumAll;
