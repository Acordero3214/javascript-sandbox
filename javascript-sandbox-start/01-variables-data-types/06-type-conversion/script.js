let amount = 'hello';

// Convert a string to a number
 amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// Convert a number to a string
// amount = amount.toString();
// amount = String(amount);

// Convert a string to a decimal
// amount = parseFloat(amount);

// Convert a number to a boolean
// amount = Boolean(amount);

// Explaining NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
