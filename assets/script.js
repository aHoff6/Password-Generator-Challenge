// Assignment code here

//Array of options for computer to pick from.
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var charCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "?", "=", "_"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {                               //first window prompt-selecting character amount


  //  var chooseCap = window.prompt("Would you like to include capital letters?\nType Yes Or No?"); //if good, moves on to next prompt

  //     if (chooseCap == "yes") {

  //     } else if (chooseCap == "no") {

  //     }

  //   var chooseLower = window.prompt("Would you like to include lowercase letters?\nType Yes or No?");

  //    if (chooseLower == "yes") {

  //    } else if (chooseLower == "no") {

  //    }

  //   var chooseSpecial = window.prompt("Would you like to include special characters?\nType Yes or No");

  //    if (chooseSpecial == "yes") {

  //    } else if (chooseSpecial == "no") {

  //    }   

  //   var chooseNum = window.prompt("Would you like to include numbers?\nType Yes or No");

  //    if (chooseNum == "yes") {

  //    } else if (chooseNum == "no") {

  // //    }

  //    console.log(chooseNum);
  //    console.log(chooseSpecial);
  //    console.log(chooseLower);
  //    console.log(chooseCap);
  //    console.log(chooseCharAmount);
  function generatePassword() {
    var chooseCharAmount = window.prompt("How many characters would you like your password to be?\nChoose a number between 8 and 128.");

    if (chooseCharAmount < 8 || chooseCharAmount > 128) {         //checking user input to see if its within the acceptable range
      window.alert("Number of characters is out of range, try again.");

    } else if (chooseCharAmount >= 8 && chooseCharAmount <= 128) {
     var output = [];
       for (var i = 0; i < chooseCharAmount; i++) {
        output.push(charLower[Math.floor(Math.random() * chooseCharAmount)])
       }
    }
    return 
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// window.prompt("Would you like to include capital letters?");

