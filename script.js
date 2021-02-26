// Assignment Guidelines 

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Thought Process

// Button gets clicked
//    some function runs after click
// Prompt pops up to ask for number of characters in password
//   write number to variable
// Prompt asks for each criteria
//    store each criteria in bool variable
// Generate Password
//    create array of length specified by user
//    use random function to assign value to each spot in array
//    concatenate array as single variable
// Display Password




// Assignment Code

// Add arrays for each type of character



// Add function to select random item from array

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Selects button with the id of generate
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;      

}

function generatePassword() {
  //Prompt user for password length
  //check if input is between 8 and 128
  //confirm for character types

  //add each character type selected to password
  //trim password to set characters limit
  

}

// Add event listener to generate button
// runs write password function when the generateBtn button is clicked
generateBtn.addEventListener("click", writePassword);



