
/*
const exports.greeter = (firstName = 'Name', lastName = 'Surname') => {
    console.log('Greeting ' + firstName +' '+ lastName);
}

exports.greeter('vasya', 'ivanov');

*/
const division = (dividend, divisor) => {
if (dividend === 0) {
console.log('Dividend is 0');
return 0;
}

if (divisor === 0) {
console.log('Divisor is 0');
return undefined;
}

if ((typeof divisor !== 'number')||(typeof dividend !== 'number')) {
console.log('Please provide 2 numbers');
return undefined;
}
  else  {
  let s = dividend/divisor;
  console.log(s);
  return s;
 }
}

//exports.greeter('vasya', 'ivanov');
division (0, 0);