// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of"

const titleCase = str => {
	let wordArray = str.split(" ");
	let newArray = [];
	for (let i = 0; i < wordArray.length; i++) {
		// Capitalize first letter, slice the rest, convert to lower case & add together.
		newArray.push(
			wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1).toLowerCase()
		);
	}
	return newArray.join(" ");
};

console.log(titleCase("sHoRt AnD sToUt"));
