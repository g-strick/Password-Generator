// Creates object will change based on user input.
var passwordObject = {
    length: "",
    upper: "",
    lower: "",
    numbers: "",
    specialChars: ""
  };


//   Characters that can be used in the password generation
var passwordCharacters = "";

// transfers values from passwordObject to array passwordCharacters based off user input
function convertPasswordChars() {

if(passwordObject.upper == true){
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordCharacters += upperString;
}

if(passwordObject.lower == true){
  var lowerString = "abcdefghijklmnopqrstuvwxyz";
  passwordCharacters += lowerString;
}

if(passwordObject.numbers == true){
  var numberString = "0123456789";
  passwordCharacters += numberString;
}

if(passwordObject.specialChars == true){
  var specialCharString = "!@#$%^&*()-+=<>";
  passwordCharacters += specialCharString;
    }
    console.log('passwordCharacters:', passwordCharacters)
}


function generatePassword() {
    
    passwordObject.length = prompt("Please enter desired password length. (Enter a digit from 8 to 128");
    
    while (passwordObject.length < 8 || passwordObject.length > 128 || isNaN(passwordObject.length) === true ) {
    passwordObject.length = prompt("Please enter a number from 8 to 128.");
    }
    passwordObject.upper = confirm("Would you like capital letters?")
    passwordObject.lower = confirm("Would you like lowercase characters?")
    passwordObject.numbers = confirm("Would you like numbers?")
    passwordObject.specialChars = confirm("Would you like special characters?")
        console.log('passwordObject:', passwordObject)
        
    convertPasswordChars();
    
    for (var i = 0; i < passwordObject.length; i++) {
        // generate a random number between 1 and the length of passwordCharacters. Math.floor rounds down so I add a 1 to it.
        var rand = Math.floor(Math.random() * passwordCharacters.length + 1);
        password += passwordCharacters.charAt(rand);
        
    }

    return password;
    
}

// Add event listener to generate button & calls the writePassword function
generate.addEventListener("click", writePassword);

// Write var password to #password in index.html
function writePassword() {
  
    var password = generatePassword();

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}