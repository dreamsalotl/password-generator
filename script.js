// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = prompt("Input desired password length. (Note: Password must be between 8 and 128 characters.)");
  if (passLength < 8) {
    alert("Password length too short, please try again.");
  } else if (passLength > 128) {
    alert("Password length too long, please try again.")
  }
  var numbers = "0123456789";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var lettersCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
