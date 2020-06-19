function checkLetters(str) {
    let strArray = str.split("");
    let finalStr = strArray.map((char) => {
      if (/[a-z]/.test(char)) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      return char;
    });
    return finalStr.join("");
  }
  
  export default checkLetters;