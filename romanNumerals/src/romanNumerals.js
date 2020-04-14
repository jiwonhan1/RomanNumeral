export class romanNumerals 
{
  constructor(letters)
  {
    this.letters = letters;
    this.romanNumber = 0;
  };
  getRomanNumerals()
  {
    var romanNumerals= (letters) => {
      if (letters === ""){
        return this.romanNumber;
        }
          else {
        if (letters[0] === "M" || letters[0] === "m") {
              return romanNumerals(letters.substring(1)) + this.romanNumber + 1000;
      
          } else if (letters[0] === "D" || letters[0] === "d") {
        return romanNumerals(letters.substring(1)) + this.romanNumber + 500;
      
          } else if (letters[0] === "C" || letters[0] === "c") {
        return romanNumerals(letters.substring(1)) + this.romanNumber + 100;
      
          } else if (letters[0] === "L" || letters[0] === "l") {
        return romanNumerals(letters.substring(1)) + this.romanNumber + 50;
          } else if (letters[0] === "X" || letters[0] === "x") {
        return romanNumerals(letters.substring(1)) + this.romanNumber + 10;
          } else if (letters[0] === "V" || letters[0] === "v") {
        return romanNumerals(letters.substring(1)) + this.romanNumber + 5;
          }else if (letters[0] === "I" || letters[0] === "i") {
        return romanNumerals(letters.substring(1)) + this.romanNumber + 1;
          }
      }
} 
return romanNumerals(this.letters)
  }
}

