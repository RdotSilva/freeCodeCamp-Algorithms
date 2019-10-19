// One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

const rot13 = str => {
	let split = str.split("");

	// Use to filter out punctuation included in string.
	let punc = '!"#$%&()*+,-./:;<=>?@[]^_` {|}~';

	// Build array with ascii values (+13)
	for (let i = 0; i < split.length; i++) {
		if (punc.includes(split[i])) {
			continue;
		} else {
			split[i] = split[i].charCodeAt(0) + 13;
		}
	}

	// Convert ASCII back to string, also take care of carry over if < 90.
	// A = 65 Z = 90
	for (let i = 0; i < split.length; i++) {
		if (punc.includes(split[i])) {
			split[i] = split[i];
		} else if (split[i] > 90) {
			split[i] = 64 + (split[i] - 90);
			split[i] = String.fromCharCode(split[i]);
		} else {
			split[i] = String.fromCharCode(split[i]);
		}
	}
	return split.join("");
};

rot13("SERR PBQR PNZC");
