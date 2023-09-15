
//image in the right of the bage
var headerDiv = document.getElementById('header');
headerDiv.style.float = 'right';

 //ul in the center of the bage and list style circle
var navList = document.getElementById('nav');
navList.style.textAlign = 'center';
navList.style.listStyleType = 'circle';

//make the style list(circle) in the center 
var navigationDiv = document.getElementById('navigation');
navigationDiv.style.listStylePosition = 'inside';
navigationDiv.style.clear = 'both';


// Create a new img element under list item 
var secondImg = document.createElement('img');
secondImg.src = 'images/1.jpg'; 
navigationDiv.appendChild(secondImg);



