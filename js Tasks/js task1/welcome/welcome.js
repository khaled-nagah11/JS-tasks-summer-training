
alert("Welcome to my site");

var name = prompt("Enter your name");
var color = prompt("Enter a color (red, green, blue)");

switch (color) {
  case 'red':
    document.write("Welcome " + "<p style='color:red'>" + name +"</p>" );
    break;
  case 'green':
    document.write("Welcome " + "<p style='color:green'>" + name +"</p>" );
    break;
  case 'blue':
    document.write("Welcome " + "<p style='color:blue'>" + name +"</p>" );
    break;
  default:
    document.write("Welcome " + "<p style='color:black'>" + name +"</p>" );
    break;
}