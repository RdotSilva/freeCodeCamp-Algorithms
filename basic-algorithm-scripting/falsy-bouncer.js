// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

const bouncer = arr => {
	// Filter returns an array of items that are true.
	return arr.filter(item => item);
};

bouncer([7, "ate", "", false, 9]);
