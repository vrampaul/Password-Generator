// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var numbersArr = ["1","2","3","4","5"]
var lettersArr = ["a","s","d","f","g"]
var specialCharArr = ["!","@","#","$","%"]
var capLettersArr = ["Q","W","E","R","T"]


function generatePassword(){
  var newPassword = "";
  var finalArr = [];

  var needNum = prompt("Enter y or n to use numbers.")
  console.log(needNum);
  var needSpecial = prompt("Enter y or n to use special characters.");
  console.log (needSpecial);
  var needUpperCase = prompt("Enter y or n to use capital letters.");
  console.log (needUpperCase);
  var needLowerCase = prompt("Enter y or n to use lower case letters.");
  console.log(needLowerCase);

  var passwordLength = prompt("How many characters should your new password be? Please pick from 8 - 128");
  console.log(passwordLength)
  var needsList = { 
    numbers: needNum,
    special: needSpecial,
    upper: needUpperCase,
    lower: needLowerCase
  };

  if (needsList.numbers === "y"){
    finalArr = finalArr.concat(numbersArr);
    var randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
    newPassword += randomNum;
  }
  if (needsList.special === "y"){
    finalArr = finalArr.concat(specialCharArr);
    var randomSpChar = specialCharArr[Math.floor(Math.random() * specialCharArr.length)];
    newPassword += randomSpChar;
  }
  if (needsList.upper === "y"){
    finalArr = finalArr.concat(capLettersArr);
    var randomUpperCase = capLettersArr[Math.floor(Math.random() * capLettersArr.length)];
    newPassword += randomUpperCase; 
  }
  if (needsList.lower === "y"){
    finalArr = finalArr.concat(lettersArr);
    var randomLowerCase = lettersArr[Math.floor(Math.random() * lettersArr.length)];
    newPassword += randomLowerCase;
    console.log(newPassword)
  }

  var remainingLength = passwordLength - newPassword.length;
  for (var i = 0; i < remainingLength; i++){
    var randomPasswordString = finalArr[Math.floor(Math.random() * finalArr.length)];
    newPassword += randomPasswordString
    
  }
  return newPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




