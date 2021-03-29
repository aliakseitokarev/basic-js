const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count = this.calculateDepth(arr[i]);
        if (result < count) result = count;
        // break; 
      } 
    }
    return result + 1;
  }
}
