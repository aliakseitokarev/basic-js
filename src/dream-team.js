const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!(Array.isArray(members))) return false;
  let result = members.filter(elem => typeof(elem) == 'string');
  if (result == []) return false;
  return result.map(currentValue => currentValue.trim()[0].toUpperCase()).sort().join('');

};
