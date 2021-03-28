const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    (type === false) ? this.type = 'reverse' : this.type = 'direct';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    let messageUp = message.toUpperCase();
    let modifiedKey = key.toUpperCase();
    let result = '';
    let count = 0;
    while (messageUp.length > modifiedKey.length) modifiedKey += key.toUpperCase().repeat(1);
    for (let index = 0; index < messageUp.length; index++) {
      if (messageUp[index].charCodeAt() > 64 && messageUp[index].charCodeAt() < 91) {
        result += String.fromCharCode((messageUp[index].charCodeAt() + modifiedKey[count].charCodeAt() - 130) % 26 + 65);
        count++;
      } else result += messageUp[index];
    };
    return (this.type === 'reverse' ? result.split('').reverse().join('') : result);
  }    

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error();
    let messageUp = encryptedMessage.toUpperCase();
    let modifiedKey = key.toUpperCase();
    let result = '';
    let count = 0;
    while (messageUp.length > modifiedKey.length) modifiedKey += key.toUpperCase().repeat(1);
    for (let index = 0; index < messageUp.length; index++) {
      if (messageUp[index].charCodeAt() > 64 && messageUp[index].charCodeAt() < 91) {
        result += String.fromCharCode((messageUp[index].charCodeAt() - modifiedKey[count].charCodeAt() + 26) % 26 + 65);
        count++;
      } else result += messageUp[index];
    }
    return (this.type === 'reverse' ? result.split('').reverse().join('') : result);
    
  }
}

module.exports = VigenereCipheringMachine;
