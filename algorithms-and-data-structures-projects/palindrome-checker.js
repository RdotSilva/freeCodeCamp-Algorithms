// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and
// turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

const palindrome = str => {
	// Remove all non alphanumeric chars.
	let letterRegex = /^[a-zA-Z0-9]+$/;

	let split = str.split("");

	let container = [];

	// Filter with regex and turn to lowercase.
	for (const element of split) {
		if (letterRegex.test(element)) {
			container.push(element.toLowerCase());
		}
	}
	// Create a copy (reverse mutates original array)
	let containerCopy = container.slice();

	let reverse = container.reverse();

	for (let i = 0; i < reverse.length; i++) {
		if (containerCopy[i] === reverse[i]) {
			continue;
		} else {
			return false;
		}
	}
	return true;
};

palindrome("animal");
