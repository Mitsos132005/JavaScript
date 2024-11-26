num = parseInt(prompt("Give me a Number:"))
  for(i = 2; i <= num; i++){
    if(num % i === 0) {
	console.log("The Number is not Prime");
	break
					}
	else {
		console.log("The Number is Prime");
		break
		}
}