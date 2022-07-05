// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;

var characterList = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789"," !#$%&'()*+,-./:;<=>?@^_`{|}~"];
console.log(characterList);

// Helper function generatePassword() that creates a password given the user input criteria
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*characterList.length);
    var chooseList = characterList[randomIndex];
    var randomIndexTwo = Math.floor(Math.random()*chooseList.length);
    password += chooseList[randomIndexTwo];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("How long do you want your password? Choose a number between 8 and 128.")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
