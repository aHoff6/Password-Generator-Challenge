// Assignment code here

//Array of options for computer to pick from.
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var charCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "?", "=", "_"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var output = [];
var options = [];    //empty arrays for pushing user input values into

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  function generatePassword() {                                     //setting variable for users desired input through window prompt question
    var chooseCharAmount = window.prompt("How many characters would you like your password to be?\nChoose a number between 8 and 128.");

    if (chooseCharAmount < 8 || chooseCharAmount > 128) {         //checking user input to see if its within the acceptable range
      window.alert("Number of characters is out of range, try again.");
      

    } else if (chooseCharAmount >= 8 && chooseCharAmount <= 128) {    
   
    }                                                            //user input prompt for capitol letters
    var chooseCap = confirm("Would you like to include capital letters?");   
    if (chooseCap) {        //if this value is true capitol letters will be included in users password
      output.push(charCap[Math.floor(Math.random() * charCap.length)]);      //pushing into arrays and randomizing array content for password character bank
      options.push(charCap);
    

    }                                                              // //user input prompt for lowercase letters
    var chooseLow = confirm("Would you like your password to include lowercase letters?");
    if (chooseLow) {           //if this value is true lowercase letters will be included in users password
      output.push(charLower[Math.floor(Math.random() * charLower.length)]);
      options.push(charLower);
  
      }                                                             //user input prompt for special characters
    var chooseSpecial = confirm("Would you like your password to include special characters?");
    if (chooseSpecial) {         //if this value is true will be included in users password
      output.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
      options.push(specialChar)
    }                                                                //user input prompt for numbers
    var chooseNum = confirm("Would you like your password to include numbers in your password?");
    if (chooseNum) {
      output.push(numbers[Math.floor(Math.random() * numbers.length)]);
      options.push(numbers);
    }
  

    var remainingChoices = chooseCharAmount - output.length;
    
    //  console.log(options.flat());                      
    
    for (var i = 0; i < remainingChoices; i++) {             // for loop pulling data out of chosen arrays
      output.push(options.flat()[Math.floor(Math.random() * options.flat().length)]);           // ".flat()" was found with a tutor when trying to store randomly selected characters to array
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

