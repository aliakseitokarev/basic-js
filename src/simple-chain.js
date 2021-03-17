const CustomError = require("../extensions/custom-error");

const chainMaker = {
  tempArr: [],
  getLength() {
    return this.tempArr.length;
  },
  addLink(value) {
    this.tempArr.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) != 'number' || position < 1 || position > this.tempArr.length || !(position ^ 0)) {
      this.tempArr = [];
      throw new Error();
    };
    this.tempArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.tempArr.reverse();
    return this;
  },
  finishChain() {
    let result = this.tempArr.join('');
    this.tempArr = [];
    return result.slice(0, result.length - 2);
  }
};

module.exports = chainMaker;
