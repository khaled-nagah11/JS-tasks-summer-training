


var array = [];
array[0] = parseFloat(prompt("Enter the first number : "));
array[1] = parseFloat(prompt("Enter the second number : "));
array[2] = parseFloat(prompt("Enter the third number : "));

var arrSum = 0;
var arrMulti = 1;
var arrDiv = array[0]/array[1]/array[2];

for(var i =0 ; i<3; i++) {
    arrSum += array[i];
    arrMulti *= array[i];
}
document.write("sum of 3 value :" + array[0] + "+" + array[1] + "+" + array[2] + " = " + arrSum + "<br>");
document.write("multi of 3 value :" + array[0] + "*" + array[1] + "*" + array[2] + " = " + arrMulti + "<br>");
document.write("div of 3 value :" + array[0] + "/" + array[1] + "/" + array[2] + " = " + arrDiv.toFixed(2) + "<br>");

