// Function with console
function add(number1, number2) {
	const sum = number1 + number2;
	console.log(sum);
}
add(30, 20);

// Function with return
function adds(num1, num2) {
	return num1 + num2;
}
var number1 = 10;
var number2 = 20;
var total2 = adds(number1, number2);
console.log(total2);

// Function with return
function bringSingara(money) {
	const singaraPrice = 10;
	const singara = money / singaraPrice;
	return singara;
}

const numberOfSingara = bringSingara(200);
console.log(numberOfSingara);
