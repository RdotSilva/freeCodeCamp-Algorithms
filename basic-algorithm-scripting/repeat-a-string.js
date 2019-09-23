// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

const repeatStringNumTimes = (str, num) => {
	let repeatedString = "";

	for (let i = 0; i < num; i++) {
		repeatedString += str;
	}

	return repeatedString;
};

console.log(repeatStringNumTimes("abc", -1));
