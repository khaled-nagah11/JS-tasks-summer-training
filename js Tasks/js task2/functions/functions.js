
// task 1 function accept 2 parameter 

function acceptTwoParameters(param1, param2) {
    if (arguments.length !== 2) {
      throw new Error('Exactly 2 parameters are required.');
    }
  }
  

  // task2 function that takes any number of parameters and returns them reversed 
function ReversedParameters() {
  
  var argumentArray = Array.from(arguments);
  argumentArray.reverse();
  return argumentArray;
}
// examble:
var reversed = ReversedParameters(1,2,3,4,5);
console.log(reversed);



// task 3 function that takes date string as a parameter, and returns the Day name
function getDayName(dateString) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dateObj = new Date(dateString);
  
  if (isNaN(dateObj)) {
      return 'Invalid date format. Please use YYYY-MM-DD.';
  }
  
  return daysOfWeek[dateObj.getUTCDay()];
}
// Example:
var dateStr = '2023-09-15';
var dayName = getDayName(dateStr);
console.log("The day for: " + dateStr + " is " + dayName );



// task 4 function to return reversed string.for example "word" you will return "drow"
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}
// Example:
var originalString = "word";
const reversedString = reverseString(originalString);
console.log(reversedString); 