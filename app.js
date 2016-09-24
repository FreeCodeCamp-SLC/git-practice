$(document).ready(function() {
var userInput = +prompt('What number would you like to count to?');
// console.log(typeof userInput);

function fizzy(number) {
  if(number %3 === 0) {
    return true;
  } else {
    return false;

  };
};

function buzzy(number) {
  if(number %5 === 0) {
    return true;
  }else {
    return false;
  };
};

function fizzbuzz(number) {
  parseInt(number);

  for (var i=0; i<=number; i++) {
    if(buzzy(i) && buzzy(i)) {
      $('.output').append('<p>FizzBuzz</p>');
    } else { if (buzzy(i)) {
      $('output').append
    }}
    })
  }
}
});
