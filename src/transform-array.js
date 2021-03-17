const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error ();
  let result;
  result = arr.filter((elem, index, array) => {
    if ((elem === '--double-prev' || elem === '--discard-prev') && (array[index - 2] === '--discard-next')) return false;
    if ((elem === '--double-next' ) && (array[index + 2] === '--discard-prev')) return false;
    if ((elem === '--discard-next') || (array[index - 1] === '--discard-next')) return false;
    if ((elem === '--discard-prev') || ((array[index + 1] === '--discard-prev') && (array[index - 1] != '--double-next'))) return false;
    if ((elem === '--double-prev') && index == 0) return false;
    if ((elem === '--double-next') && index == array.length - 1) return false;
    return true;
  }).map((currentValue, index, array) => {
    if (currentValue === '--double-next') return array[index + 1];
    if (currentValue === '--double-prev') return array[index - 1];
    return currentValue;
  });

  return result;
};
