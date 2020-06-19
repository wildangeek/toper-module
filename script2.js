function textTransformApp(string) {
    let ini = string.split("");
    let itu = ini.map((character) => {
      if (/[a-z]/.test(character)) {
        character = character.toUpperCase();
      } else {
        character = character.toLowerCase();
      }
      return character;
    });
    return itu.join("");
  }
  
  export default textTransformApp;
