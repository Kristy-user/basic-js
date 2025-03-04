const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  if (s1.length === 0 || s2.length === 0) {
    return count;
  } else {
    const uniqLetters = new Set(s1);
    const firstWord = s1.split('');
    const secondWord = s2.split('').filter((i) => uniqLetters.has(i));
    uniqLetters.forEach((i) =>
      firstWord.filter((letter) => letter === i).length >
      secondWord.filter((letter) => letter === i).length
        ? (count += secondWord.filter((letter) => letter === i).length)
        : (count += firstWord.filter((letter) => letter === i).length)
    );

    return count;
  }
}

module.exports = {
  getCommonCharacterCount,
};
