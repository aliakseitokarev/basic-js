const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  count = 1;
  
  calculateDepth(arr) {
    let myArr = [];
    let result;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.count++;
        myArr = arr.flat();
        this.calculateDepth(myArr);
        break; 
      } 
    }
    result = this.count;
    // this.count = 1;
      return result;
  }
}
