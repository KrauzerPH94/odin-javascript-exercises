const date = new Date();
const year = date.getFullYear();

const findTheOldest = function (arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        const oldestAge = findAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = findAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
};

const findAge = function (birthYear, deathYear) {
    if (!deathYear) { deathYear = year };
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
