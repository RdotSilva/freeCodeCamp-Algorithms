// Return true if the string in the first element of the array
// contains all of the letters of the string in the second element of the array.

const mutation = arr => {
	let stringOne = arr[0].toLowerCase();
	let stringTwo = arr[1].toLowerCase();

	for (let i = 0; i < stringOne.length; i++) {
		console.log(stringOne.charAt(i));
	}
};

mutation(["hello", "hey"]);
