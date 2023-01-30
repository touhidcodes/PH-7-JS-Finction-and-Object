const shoppingCart = {
	pen: 20,
	flower: 2,
	books: 39,
	mouse: 2,
};

// object property get methods

// 1. Dot notation (objectName.propertyName)
var propertyValue1 = shoppingCart.pen;
console.log(propertyValue1);

// 2. Index (objectName[propertyName])
var propertyValue2 = shoppingCart["flower"];
console.log(propertyValue2);

// 3. Index with variable
var propertyName3 = "mouse";
var propertyValue3 = shoppingCart[propertyName3];

// Output
console.log(shoppingCart);

// object property set methods

// 1. Dot notation (objectName.propertyName)
shoppingCart.pen = 25;
console.log(shoppingCart.pen);

// 2. Index (objectName[propertyName])
shoppingCart["flower"] = 5;
console.log(shoppingCart.flower);

// 3. Index with variable
var propertyName3 = "mouse";
shoppingCart[propertyName3] = 7;

console.log(shoppingCart.mouse);

// Output
console.log(shoppingCart);
