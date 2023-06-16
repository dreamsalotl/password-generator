// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedPassword = [];

function generatePassword() {
  function getLength () {
    var passLength = prompt("Input desired password length. (Note: Password must be between 8 and 128 characters.)");
    if (passLength < 8) {
      alert("Password length too short, please try again.");
      getLength();
    } else if (passLength > 128) {
      alert("Password length too long, please try again.");
      getLength();
    }
    return passLength;
  }

  var passLength = getLength();
  var numbers = "0123456789";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var lettersCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var characterSelections = [];

  var numbersBool = confirm ("Would you like numbers in your password? ('Okay' for yes, 'Cancel' for no.)");
  if (numbersBool === true) {
    characterSelections.push(numbers);
    //console.log( characterSelections);
  }
  var lettersBool = confirm ("Would you like letters in your password? ('Okay' for yes, 'Cancel' for no.)");
  if (lettersBool === true) {
    characterSelections.push(letters);
    //console.log(characterSelections);
  }
  var lettersCapitalBool = confirm ("Would you like capital letters in your password? ('Okay' for yes, 'Cancel' for no.)");
  if (lettersCapitalBool === true) {
    characterSelections.push(lettersCapital);
    //console.log(characterSelections);
  }
  var specialCharactersBool = confirm ("Would you like special characters in your password? ('Okay' for yes, 'Cancel' for no.)");
  if (specialCharactersBool === true) {
    characterSelections.push(specialCharacters);
    //console.log(characterSelections);
  }

  characterSelections = characterSelections.join("");
  //console.log(characterSelections);

  for (i = 0; i < passLength; i++) {

    var generateRandomCharacter = characterSelections[Math.floor(Math.random() * characterSelections.length)];

    generatedPassword.push(generateRandomCharacter)[i];

  }

}

// Write password to the #password input
function writePassword() {
  generatePassword();
  password = generatedPassword.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);