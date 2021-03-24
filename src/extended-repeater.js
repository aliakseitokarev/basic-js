const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
    let result = `${str}`;
    if (('additionRepeatTimes' in options && options.additionRepeatTimes != undefined && options.additionRepeatTimes > 0) || 'addition' in options) {
        result = `${str}` + `${`${options.addition}` || ''}${options.additionSeparator || '|'}`.repeat(options.additionRepeatTimes || 1);
        ('additionSeparator' in options ) ? result = result.slice(0, -options.additionSeparator.length) : result = result.slice(0, -1);
        console.log(result);
    }
        result = `${result}${options.separator || '+'}`.repeat(options.repeatTimes || 1);
        ('separator' in options) ? result = result.slice(0, -options.separator.length) : result = result.slice(0, -1);
    return result;
};
  