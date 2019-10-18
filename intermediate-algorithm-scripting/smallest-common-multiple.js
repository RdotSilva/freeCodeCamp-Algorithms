// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that
// is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

const smallestCommons = arr => {
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	// Set max value as final to start.
	let final = max;

	// Loop starting backwards and decrement i.
	for (let i = max - 1; i >= min; i--) {
		console.log(`Final: ${final} % i: ${i} = ${final % i}`);
		if (final % i) {
			final += max;
			i = max;
			console.log(`New Final: ${final}`);
		}
	}
	return final;
};

smallestCommons([1, 5]);
