// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// function findLongestWordLength(str) {
// 	let arrayOfStrings = str.split(" ");
// 	let longestStringLength = 0;
// 	for (let i = 0; i < arrayOfStrings.length; i++) {
// 		if (arrayOfStrings[i].length > longestStringLength) {
// 			longestStringLength = arrayOfStrings[i].length;
// 			longestString = arrayOfStrings[i];
// 		}
// 	}
// 	return longestString.length;
// }

const findLongestWordLength = str => {
	let wordsSplit = str.split(" ");
	let longestWordLength = 0;

	// Check each word in the array for length & update longest length variable.
	wordsSplit.forEach(element => {
		if (element.length > longestWordLength) {
			longestWordLength = element.length;
		}
	});
	return longestWordLength;
};

console.log(
	findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
