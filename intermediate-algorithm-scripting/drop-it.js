// Given the array arr, iterate through and remove each element starting from the
// first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

const dropElements = (arr, func) => {
	// Hold the index of number that passes the reduce function test.
	let indexHolder = [];

	// Test each number in array with the func callback & push index into array.
	arr.reduce((acc, number, index) => {
		if (func(number)) {
			indexHolder.push(index);
		}
	}, 0);

	// Check for empty array.
	if (indexHolder.length > 0) {
		return arr.slice(indexHolder[0]);
	} else {
		return [];
	}
};

dropElements([1, 2, 3, 4], function(n) {
	return n > 5;
});
