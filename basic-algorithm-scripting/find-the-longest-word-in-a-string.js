// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
	let arrayOfStrings = str.split(' ');
	let longestStringLength = 0;
	let longestString = '';
	for (let i = 0; i < arrayOfStrings.length; i++) {
		if (arrayOfStrings[i].length > longestStringLength) {
			longestStringLength = arrayOfStrings[i].length;
			longestString = arrayOfStrings[i];
		}
	}
	return longestString.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
