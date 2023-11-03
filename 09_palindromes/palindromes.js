const palindromes = function (word) {
    return word.split('')
    .map(w => w.split(/(?=\S)/)
        .reverse()
        .join(''))
    .join('');
};

// Do not edit below this line
module.exports = palindromes;
