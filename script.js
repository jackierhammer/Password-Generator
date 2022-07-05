// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterChoices = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789"," !#$%&'()*+,-./:;<=>?@^_`{|}~"];

// Helper function generatePassword() that creates a password given the user input criteria
function generatePassword(characterList, passwordLength) {
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
  passwordLength = prompt("How long do you want your password? Choose a number between 8 and 128.","8")
  // This loop checks to make sure that the user has entered a number between 8 and 128.
  while ((passwordLength < 8)||(passwordLength > 128)) {
    passwordLength = prompt("Please enter a valid integer between 8 and 128.","8");
  }
  var whichCharacters = prompt("List all character types you would like included in your password. Type 'l' for lowercase, 'u' for uppercase, 'n' for numbers, and 's' for special characters. If you would like to select all types, please type 'all'.");

  // The following section of code checks for which types of characters the user wants and adds them to the pool of possible characters.
  var selectedCharacters = [];
  if (whichCharacters.includes('l')) {
    selectedCharacters.push(characterChoices[0]);
  }
  if (whichCharacters.includes('u')) {
    selectedCharacters.push(characterChoices[1]);
  }
  if (whichCharacters.includes('n')) {
    selectedCharacters.push(characterChoices[2]);
  }
  if (whichCharacters.includes('s')) {
    selectedCharacters.push(characterChoices[3]);
  }

  // The following conditional checks if a user had selected any types.
  // If the user types 'all' or does not select any types, all types will be automatically selected for them.
  if ((selectedCharacters.length === 0)||(whichCharacters.includes('all'))) {
    selectedCharacters.push(characterChoices[0],characterChoices[1],characterChoices[2],characterChoices[3]);
  }

  var password = generatePassword(selectedCharacters, passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
