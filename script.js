// Creates object will change based on user input.
var passwordObject = {
    length: "",
    upper: "",
    lower: "",
    numbers: "",
    specialChars: ""
  };
//   console.log('passwordObject:', passwordObject)
//   Characters that can be used in the password generatin
var passwordCharacters = "";


// Write password to the #password input
function writePassword() {
    passwordObject.length = prompt("Please enter desired password length. (Enter a digit from 8 to 128");
    
    while (passwordObject.length < 8 || passwordObject.length > 128 || isNaN(passwordObject.length) === true )
    passwordObject.length = prompt("Please enter a number from 8 to 128.");
    
    passwordObject.upper = confirm("Would you like capital letters?")
    passwordObject.lower = confirm("Would you like lowercase characters?")
    passwordObject.numbers = confirm("Would you like numbers?")
    passwordObject.specialChars = confirm("Would you like special characters?")
    console.log('passwordObject:', passwordObject)
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
//   var passwordCharacters = generatePassword();
}

// Add event listener to generate button & calls the writePassword function
generate.addEventListener("click", writePassword);
