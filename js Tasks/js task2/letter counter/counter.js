
var userInput = prompt("enter your message");
var counter = 0;

for (var i = 0 ; i< userInput.length ; i++){
  if (userInput[i] =='E' || userInput[i]=='e')
  {
    counter++;
  }
}
  document.write("the letter e in your message =" + counter )