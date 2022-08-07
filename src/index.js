const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let partString = "";
  let stringArr = [];
  let morseArray = [];
  let replSpace = "**********";
  let i;
  let resultString = "";
  for (i = 1; i <= expr.length; i++) {
    partString = partString + expr[i - 1];
    if (i % 10 === 0) {
      stringArr.push(partString);
      partString = "";
    }
  }
  for (i = 0; i < stringArr.length; i++) {
    stringArr[i] = stringArr[i].replace(replSpace, " ");
    stringArr[i] = stringArr[i].replace(/10/gi, ".");
    stringArr[i] = stringArr[i].replace(/11/gi, "-");
    stringArr[i] = stringArr[i].replace(/00/g, "");
    morseArray[i] = stringArr[i];
  }
  for (i = 0; i < morseArray.length; i++) {
    if (morseArray[i] === " ") resultString += morseArray[i];
    for (let elem in MORSE_TABLE) {
      if (elem === morseArray[i]) {
        resultString += MORSE_TABLE[elem];
      }
    }
  }
  return resultString;
}

module.exports = {
  decode,
};
