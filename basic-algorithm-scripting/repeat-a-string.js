// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	let repeatedString = '';
	while (num > 0) {
		repeatedString += str;
		num--;
	}
	return repeatedString;
}

// Solve using recursion
function repeatStringNumTimes(str, num) {
	if (num < 0) return '';
	if (num === 1) return str;
	else return str + repeatStringNumTimes(str, num - 1);
}

// Declarative solution
function repeatStringNumTimes(str, num) {
	return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes('abc', 3);
