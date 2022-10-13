const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  allChains: [],
  getLength() {
    return this.allChains.length;
  },
  addLink(value = '') {
    this.allChains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.allChains.length
    ) {
      this.allChains = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.allChains.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.allChains.reverse();
    return this;
  },
  finishChain() {
    const result = this.allChains.join('~~');
    this.allChains = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
