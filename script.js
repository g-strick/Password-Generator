// Assignment Code
var generateBtn = document.querySelector("#generate");

var passKeys =['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '*;<>()[]{}#$?!^|'];
var plength;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordCharSet = "";
  console.log('passwordCharSet:', passwordCharSet)

  if (confirmNumOfChars) {

  }
    else{
      alert("enter a digit from 8 to 128")
      confirmNumOfChars();
      console.log('confirmNumOfChars:', confirmNumOfChars)
  }
  
  if (confirmUppercase) {
    passwordCharSet += passKeys[1];
  }

  if (confirmLowercase) {
    passwordCharSet += passKeys[0];
  }

  
  if (confirmNumbers) {
    passwordCharSet += passKeys[2];
  }

  if (confirmSpecialChars) {
    passwordCharSet += passKeys[3];
  }
}

var confirmNumOfChars = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");

var confirmUppercase = confirm("Do want uppercase letters?");

var confirmLowercase = confirm("Do want lowercase letters?");

var confirmNumbers = confirm("Do you want special characters in your password?");

var confirmSpecialChars = confirm("Do you want special characters in your password?");

