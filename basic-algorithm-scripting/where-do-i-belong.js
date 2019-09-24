// Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
// once it has been sorted. The returned value should be a number.

const getIndexToIns = (arr, num) => {
	// Sort the array.
	let sortedArray = arr.sort((a, b) => a - b);

	// Init counter.
	let counter = sortedArray[0];

	// Loop through sorted array.
	for (let i = 0; i < sortedArray.length; i++) {
		// Set new counter to current item in array if number is greater.
		if (num > sortedArray[i]) {
			counter = sortedArray[i];
			// If item is in array set counter to that item.
		} else if (num === sortedArray[i]) {
			counter = sortedArray[i];
		}
	}
	// If number is in the array return the index.
	if (sortedArray.includes(num)) {
		return sortedArray.indexOf(counter);
	}
	// Else return index of counter (largest number that is less than num, and add 1)
	return sortedArray.indexOf(counter) + 1;
};

console.log(getIndexToIns([3, 10, 5], 3));
