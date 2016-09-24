$(document).ready(function() {
 var userInput = +prompt('What number?');

 function fizz(number) {
   if(number % 3 === 0) {
     return true;
   } else {
     return false;
   };
 };

 function buzz(number) {
   if(number % 5 === 0) {
     return true;
   } else {
     return false;
   };
 };

function fizBuzz (number) {
  parseInt(number);

  for(var i= 1; i <= number; i++) {
    if(buzz(i) && fizz(i)) {
      $('.output').append('<p>FizzBuzz</p>');
    } else if (buzz(i)) {
      $('.output').append('<p>buzz</p>');
    } else if (fizz(i)) {
      $('.output').append('<p>fizz</p>');
    } else {
      $('.output').append('<p>' + i + '</p>');
    };
  };
};

while (userInput % 1 !=0) {
  alert('please provide other number');
  uaserInput = prompt('what number would you like to check?');

}
 fizBuzz(userInput);
});
