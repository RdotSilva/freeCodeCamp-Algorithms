// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	let repeatedString = '';
	while (num > 0) {
		repeatedString += str;
		num--;
	}
	return repeatedString;
}

repeatStringNumTimes('abc', 3);
