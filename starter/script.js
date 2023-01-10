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

lenght_password = prompt("How many characters will your password contain?");

// Function to prompt user for password options
function getPasswordOptions() {
  // check if the input is within limit

  while (lenght_password <= 10 || lenght_password >= 64) {
    alert("Password length must be between 11 and 63, kindly try again");
    lenght_password = prompt("How many characters will your password contain?");
  }
}

getPasswordOptions();
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
}

// Assign an action to the password parameters NEED TO FIX THIS
var passwordCharacters = [];

// Function to generate password with user input
function generatePassword() {
  if (checkSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  if (checkNumericCharacters) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }

  if (checkLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }

  if (checkUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  }

  console.log(passwordCharacters);

  var randomPassword = "";

  for (var i = 0; i < lenght_password; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

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
