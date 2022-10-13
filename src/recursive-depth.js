const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let innerArrays = arr.filter((item) => Array.isArray(item));
    let resultDepth = 0;
    innerArrays.forEach((arr) => {
      const innerArrDepth = this.calculateDepth(arr);
      if (innerArrDepth > resultDepth) {
        resultDepth = innerArrDepth;
      }
    });

    return resultDepth + 1;
  }
}
module.exports = {
  DepthCalculator,
};
