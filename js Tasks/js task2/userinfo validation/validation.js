 
 var userName = prompt ("enter your name");

do {
  var homePhone = prompt("Enter your phone number : ");
  var phoneExp = /^\d{8}$/
  if (phoneExp.test(homePhone) == false) {
      alert("Please Enter a vaild phone number");
  }
} while (phoneExp.test(homePhone) == false);

do {
  var Mobile = prompt("Enter your Mobile number : ");
  var mobileExp = /^(010|011|012|015)\d{8}$/
  if (mobileExp.test(Mobile) == false) {
      alert("Please Enter a vaild mobile number");
  }
} while (mobileExp.test(Mobile) == false)

do {
  var Email = prompt("Enter your Email : ");
  var emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailExp.test(Email) == false) {
      alert("Please Enter a vaild Email");
  }
} while (emailExp.test(Email) == false);

document.write("<h1>Welcome " + userName + "</h1>");
document.write("<h3> Your name is:"+userName+"<br>"+"Your phone number is :"+homePhone+"<br>"+"Your mobile number is :"+Mobile+"<br>"+"Your Email is :"+Email+"</h3>")
