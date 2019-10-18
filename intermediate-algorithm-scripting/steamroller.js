// Flatten a nested array. You must account for varying levels of nesting.

const steamrollArray = arr => {
	let container = [];

	// Flatten helper function. Recursively checks if item is array and flattens.
	const flat = item => {
		if (Array.isArray(item)) {
			for (let i = 0; i < item.length; i++) {
				flat(item[i]);
			}
		} else {
			container.push(item);
		}
	};

	// Run each item in array through flat.
	for (let i = 0; i < arr.length; i++) {
		flat(arr[i]);
	}

	return container;
};

steamrollArray([1, [2], [3, [[4]]]]);
