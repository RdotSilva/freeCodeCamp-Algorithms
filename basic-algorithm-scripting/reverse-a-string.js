// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// function reverseString(str) {
// 	return str
// 		.split("")
// 		.reverse()
// 		.join("");
// }

const reverseString = str => {
	return str
		.split("")
		.reverse()
		.join("");
};

const reverseWithLoop = str => {
	let reversedString = "";

	// Loop through the string starting at the last index & create new string.
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}
	return reversedString;
};

console.log(reverseString("hello"));
console.log(reverseWithLoop("cool"));
