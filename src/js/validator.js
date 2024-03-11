export default class Validator {
  validateUsername(username) {
    const regexp = /^[a-zA-Z][a-zA-Z0-9_-]{0,}[a-zA-Z0-9]$/;
    const regDig = /\d{4,}/;
    if ( regexp.test(username) && regDig.test(username) ) return true    
    return false;
  }

  validatePhoneNumber(number) {
    const regexp = /(\+?\d*)/g;
    const filteredNum = number.match(regexp).filter((e) => e && e);
    if (!filteredNum[0].includes('+')) {
      filteredNum[0] = filteredNum[0].replace(/(7|8)/, '+7');
    }
    return filteredNum.join('');
  }
}