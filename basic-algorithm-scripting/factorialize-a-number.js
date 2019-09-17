// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
	// Initialize factorial
	let factorial = 1;

	// Main loop to get factorial
	while (num > 0) {
		console.log("Current num: " + num);
		factorial = factorial * num;
		console.log("Current factorial: " + factorial);
		num = num - 1;
	}
	return factorial;
}

factorialize(5);
