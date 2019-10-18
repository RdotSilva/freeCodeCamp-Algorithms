// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

const sumAll = arr => {
	// Get min/max numbers from array.
	let minNum = Math.min(...arr);
	let maxNum = Math.max(...arr);
	let total = 0;

	// Loop and total all numbers between min/max.
	for (let i = minNum; i <= maxNum; i++) {
		total += i;
	}

	return total;
};

sumAll([1, 4]);
