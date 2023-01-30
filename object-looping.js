const shoppingCart = {
	pen: 20,
	flower: 2,
	books: 39,
	mouse: 2,
	shoes: 2,
};

const keys = Object.keys(shoppingCart);
// Keys gives output in an Array
console.log(keys);

// For Loop
for (let i = 0; i < keys.length; i++) {
	const element = keys[i];
	// console.log(element);
	const value = shoppingCart[element];
	console.log(element, value);
}

// For in loop
for (const propertyName in shoppingCart) {
	console.log(propertyName);
	const value2 = shoppingCart[propertyName];
	console.log(value2);
}
