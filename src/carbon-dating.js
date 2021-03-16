const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample( sampleActivity ) {
  if ((typeof(sampleActivity) != 'string') || (isNaN(parseFloat(sampleActivity))) || 
       parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15) return false;

  let age = Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity) ) / ( Math.LN2 / HALF_LIFE_PERIOD );
  
  return Math.ceil(age);
};
