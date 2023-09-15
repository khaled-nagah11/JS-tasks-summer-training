
var userInput ; 
var total = 0;
do {
    userInput = parseInt(prompt("enter number"));
    if(isNaN(userInput)){
        alert("enter a valid number");
    }
    else{
        total += userInput;
    }
}while( userInput < 100 && userInput !== 0);

console.log("Sum of the entered values:", total)