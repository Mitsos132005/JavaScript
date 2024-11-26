const number = parseInt(prompt('Enter a Positive Number:'));
if (number < 0) {
    console.log('I said Positive Numbers LOL');
}
else if (number === 0) {
    console.log('For the 0 its always 1 my man');
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log('The factorial of ', number, ' is ', fact);
}