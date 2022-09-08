// Assignment code here

//Array of options for computer to pick from.
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var charCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "?", "=", "_"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var output = [];
var options = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  function generatePassword() {
    var chooseCharAmount = window.prompt("How many characters would you like your password to be?\nChoose a number between 8 and 128.");

    if (chooseCharAmount < 8 || chooseCharAmount > 128) {         //checking user input to see if its within the acceptable range
      window.alert("Number of characters is out of range, try again.");
      

    } else if (chooseCharAmount >= 8 && chooseCharAmount <= 128) {
   
    } 
    var chooseCap = confirm("Would you like to include capital letters?");
    if (chooseCap) {
      output.push(charCap[Math.floor(Math.random() * charCap.length)]);
      options.push(charCap);
      // console.log(output);
      // console.log(options);

    }
    var chooseLow = confirm("Would you like your password to include lowercase letters?");
    if (chooseLow) {
      output.push(charLower[Math.floor(Math.random() * charLower.length)]);
      options.push(charLower);
    //   console.log(output);
    //   console.log(charCap);
      }
    // var chooseSpecial = confirm("Would you like your password to include special characters?");
    // if (chooseSpecial) {
    //   output += specialChar;
    // }
    // var chooseNum = confirm("Would you like your password to include numbers in your password?");
    // if (chooseNum) {
    //   output += numbers;
    // }
  

    var remainingChoices = chooseCharAmount - output.length;
    
     console.log(options.flat());
    
    for (var i = 0; i < remainingChoices; i++) {
      output.push(options.flat()[Math.floor(Math.random() * options.flat().length)]);
    }

    return (output);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// window.prompt("Would you like to include capital letters?");

