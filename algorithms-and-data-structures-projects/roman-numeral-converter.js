// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

const convertToRoman = num => {
	const map = {
		1: "I",
		4: "IV",
		5: "V",
		9: "IX",
		10: "X",
		40: "XL",
		50: "L",
		90: "XC",
		100: "C",
		400: "CD",
		500: "D",
		900: "CM",
		1000: "M"
	};

	// Create array of all map keys.
	let keys = Object.keys(map);

	// Reverse the array to get them from greatest to least.
	let reversed = keys.reverse();

	let roman = "";

	// If num is exact value of a map item just return that.
	if (map[num]) {
		return map[num];
	} else {
		for (let i = 0; i < reversed.length; i++) {
			while (num >= reversed[i]) {
				roman += map[reversed[i]];
				num -= reversed[i];
			}
		}
	}
	return roman;
};

console.log(convertToRoman(891));
