// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note
// Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

const myReplace = (str, before, after) => {
	let sentence = str.split(" ");

	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] === before) {
			// Check for upper case
			if (sentence[i].charAt(0) === sentence[i].charAt(0).toUpperCase()) {
				sentence[i] = after.charAt(0).toUpperCase() + after.substr(1);
			} else {
				sentence[i] = after;
			}
		}
	}
	return sentence.join(" ");
};

myReplace("Let us go to the store", "store", "mall");
