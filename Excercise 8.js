num1 = parseInt(prompt("Give me a Number for X^2"));
num2 = parseInt(prompt("Give me a Number for X"));
num3 = parseInt(prompt("Give me a Number for C"));
d = num2 * num2 - 4 * num1 * num3;
if (d == 0) {
	DoubleXSolution = -num2 / 2 * num1;
	console.log("The Solution for X is ", DoubleXSolution);
}
else if (d < 0) {
	ComplexRoot = Math.sqrt(-d) 
	console.log("The First Complex Solution is ", -num2 , " + i* ", ComplexRoot , " / ", 2 * num1); 
	console.log("The Second Complex Solution is ", -num2 , " - i* ", ComplexRoot , " / ", 2 * num1); 
}
else {
	TwoXSolutions1 = (-num2 + Math.sqrt(d)) / 2 * num1;
	TwoXSolutions2 = (-num2 - Math.sqrt(d)) / 2 * num1;
	console.log("The Two Solutions for X are ", TwoXSolutions1 , " and ", TwoXSolutions2);
}