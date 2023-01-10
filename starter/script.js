// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let lenght_password = "";

let checkNumericCharacters;
let checkUpperCase;
let checkLowerCase;
let checkSpecialCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
  let lenght_password = prompt(
    "How many characters will your password contain?"
  );

  // check if the input is within limit

  while (lenght_password <= 10 || lenght_password >= 64) {
    alert("Password length must be between 11 and 63, kindly try again");
    let lenght_password = prompt(
      "How many characters will your password contain?"
    );
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}
// Repeat the combination of charactors the user needs

alert("You will have" + lenght_password + " charactors");

checkSpecialCharacters = confirm(
  "Click OK to confirm if you would like to include special characters"
);
checkNumericCharacters = confirm(
  "Click OK to confirm if you would like to include numeric characters"
);
checkLowerCase = confirm(
  "Click OK to confirm if you would like to include lowercase characters"
);
checkUpperCase = confirm(
  "Click OK to confirm if you would like to include uppercase characters"
);

// Loop if answer is outside the parameters
while (
  checkUpperCase === false &&
  checkLowerCase === false &&
  checkSpecialCharacters === false &&
  checkNumericCharacters === false
) {
  alert("You must choose at least one parameter");
  var confirmSpecialCharacter = confirm(
    "Click OK to confirm if you would like to include special characters"
  );
  var confirmNumericCharacter = confirm(
    "Click OK to confirm if you would like to include numeric characters"
  );
  var confirmLowerCase = confirm(
    "Click OK to confirm if you would like to include lowercase characters"
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm if you would like to include uppercase characters"
  );
}

// Assign an action to the password parameters NEED TO FIX THIS
var passwordCharacters = [];

if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar);
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number);
}

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower);
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper);
}

console.log(passwordCharacters);

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
