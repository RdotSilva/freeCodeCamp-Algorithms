// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const pairElement = str => {
	let empty = [];

	for (let i = 0; i < str.length; i++) {
		switch (str.charAt(i)) {
			case "A":
				empty.push(["A", "T"]);
				break;
			case "T":
				empty.push(["T", "A"]);
				break;
			case "G":
				empty.push(["G", "C"]);
				break;
			case "C":
				empty.push(["C", "G"]);
				break;
		}
	}

	return empty;
};

pairElement("GAG");
