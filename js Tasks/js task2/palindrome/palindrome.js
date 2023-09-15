function isPalindrome(inputString, considerCase) {
    return inputString === inputString.split('').reverse().join('');
  }
  var inputString = prompt('Enter a string:');
  var considerCase = confirm('Do you want to consider the case? Click OK for yes, Cancel for no.');

  if (isPalindrome(inputString, considerCase)) {
    alert(inputString + " is a palindrome");
  } else {
    alert( inputString + " is not a palindrome");
  }
  document.write("<p>" + inputString + considerCase + "</p>");

  