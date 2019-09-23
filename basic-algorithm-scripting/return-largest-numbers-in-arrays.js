// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

const largestOfFour = arr => {
	let largestArray = [];
	let counter;

	// Loop for initial array.
	for (let i = 0; i < arr.length; i++) {
		// Init counter as the first item in the array.
		counter = arr[i][0];
		// Loop for nested array.
		for (let j = 1; j < arr[i].length; j++) {
			// Check every item in array to see if it's greater than current counter.
			arr[i][j] > counter ? (counter = arr[i][j]) : counter;
		}
		// Add the highest number to array only after the 2nd loop as finished.
		largestArray.push(counter);
	}
	return largestArray;
};

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1]
	])
);
