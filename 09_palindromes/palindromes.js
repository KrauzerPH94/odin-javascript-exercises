const palindromes = function (word) {
    const originalWord = word
        .toLowerCase() // Solve the 'ZZZ' match (upper case)
        .replace(/[^a-z0-9]/g, ""); // Solve the '!' match (ponctuation)
    const reversedWord = originalWord.split('').reverse().join(''); // Reverse the resulting word
    return originalWord == reversedWord; // Validates if they are 100% equal
};

// Do not edit below this line
module.exports = palindromes;
