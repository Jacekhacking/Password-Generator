







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passwordLength, includeNumbers, includeUppercase, includeSymbols) {

  var passwordLength = "";
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt('How long would you like your password to be? Must be more than 8 characters and less than 128');

  }


  var useUpperCaseLetters = window.confirm("Do you want upper case letters?");
  var useLowerCaseLetters = window.confirm("Do you want lower case letters?");
  var useNumbers = window.confirm("Do you want numbers?");
  var useSymbols = window.confirm("Do you want to use Symbols?")

  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "~~!@#$%^&*()_-+={[}]|\:;\"'<>?,./"

  var charactersToUse = [];
  if (useUpperCaseLetters) {
    charactersToUse[charactersToUse.length] = upperCaseLetters;
  }
  if (useLowerCaseLetters) {
    charactersToUse[charactersToUse.length] = lowerCaseLetters;
  }
  if (useNumbers) {
    charactersToUse[charactersToUse.length] = numbers;
  }
  if (useSymbols) {
    charactersToUse[charactersToUse.length] = symbols;
  }

  var password = "";
  while (password.length < passwordLength) {

    var i = Math.floor(Math.random() * charactersToUse.length);
    password = password + charactersToUse[i].charAt(Math.floor(Math.random() * charactersToUse[i].length));

    // for (i = 0; i < charactersToUse.length && password.length < passwordLength; i++) {
    //   password = password + charactersToUse[i].charAt(Math.random() * charactersToUse[i].length);
    // }

    // if (useUpperCaseLetters == true) {
    //   password = password + upperCaseLetters.charAt(Math.random() * upperCaseLetters.length);
    // }
    // if (useLowerCaseLetters == true && password.length < passwordLength) {
    //   password = password + lowerCaseLetters.charAt(Math.random() * lowerCaseLetters.length);
    // }

    console.log(password);

  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword, { writePassword });

