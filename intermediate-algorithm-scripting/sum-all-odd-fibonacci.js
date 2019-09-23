// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10)should return 10because all odd Fibonacci numbers less than or equal to 10are 1, 1, 3, and 5.

function sumFibs(num) {
	// Used to store the fibonacci numbers.
	let fibNumbers = [];

	// Used to track the sum of all odd fibonacci numbers.
	let sum = 0;

	// Numbers used to find the fibonacci numbers.
	let previousNumber = 0;
	let currentNumber = 1;

	// Main loop to add fibonacci numbers to array.
	while (currentNumber <= num) {
		fibNumbers.push(currentNumber);

		// Current number becomes combined numbers.
		currentNumber += previousNumber;

		// Previous number becomes
		previousNumber = currentNumber - previousNumber;
	}

	// Add only odd numbers to sum.
	fibNumbers.forEach(element => {
		if (element % 2 !== 0) {
			sum += element;
		}
	});
	return sum;
}

console.log(sumFibs(10));
