// Create a function that sums two arguments together. If only one argument is provided,
// then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether(nums) {
	let args = [...arguments];
	let argOne = args[0];
	let argTwo = args[1];
	let sum = 0;

	// Valid number helper function
	let validNum = num => {
		return Number.isInteger(num);
	};

	if (args.length > 1) {
		if (validNum(argOne) && validNum(argTwo)) {
			sum = argOne + argTwo;
		} else {
			return undefined;
		}
	} else {
		// If only one param passed, store this param in temp variable.
		let temp = args[0];

		if (validNum(temp)) {
			return function(nextArg) {
				if (temp && validNum(nextArg)) {
					return temp + nextArg;
				} else {
					return undefined;
				}
			};
		} else {
			return undefined;
		}
	}
	return sum;
}

console.log(addTogether(2)([3]));
