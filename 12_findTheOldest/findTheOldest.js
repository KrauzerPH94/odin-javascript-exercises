const findTheOldest = function (arr) {
    return arr.sort(function (a, b) {
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    })[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
