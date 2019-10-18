// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

const fearNotLetter = str => {
	for (let i = 0; i < str.length; i++) {
		// Convert str chars to ASCII and check for equality starting from 0 (0 == 65 == A)
		if (str.charCodeAt(i) === str.charCodeAt(0) + i) {
			continue;
		} else {
			return String.fromCharCode(str.charCodeAt(i) - 1);
		}
	}
	return undefined;
};

fearNotLetter("abce");
