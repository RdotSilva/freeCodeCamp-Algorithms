// Create a function that looks through an array (first argument) and
// returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

const findElement = (arr, func) => {
	// Use filter method to create an array if the item passes test.
	let truthArray = arr.filter(item => func(item));
	return truthArray ? truthArray[0] : undefined;
};

findElement([1, 2, 3, 4], num => num % 2 === 0);
