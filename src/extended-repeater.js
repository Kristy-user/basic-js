const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str = '', options) {
  let result = '';
  let add = '';
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  for (let i = 0; i < repeatTimes; i++) {
    for (let n = 0; n < additionRepeatTimes; n++) {
      n !== additionRepeatTimes - 1
        ? (add += additionSeparator ? addition + additionSeparator : addition)
        : (add += addition);
    }
    i !== repeatTimes - 1
      ? (result += separator ? str + add + separator : str + add)
      : (result += separator ? str + add : str + add);
    add = '';
  }
  return result;
}

module.exports = {
  repeater,
};
