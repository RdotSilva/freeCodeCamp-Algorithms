// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

const translatePigLatin = str => {
	// If word starts with vowel add way.
	if (str.match(/^[aeiou]/)) {
		return str + "way";
	}

	// Take out all consonants in a word before the first vowel
	// .match returns the matches as an array object.
	let consonants = str.match(/^[^aeiou]+/)[0];

	// Extract the consonants based on number of consonants, add them to the end, and add "ay" to end.
	return str.substring(consonants.length) + consonants + "ay";
};

translatePigLatin("chatter");
