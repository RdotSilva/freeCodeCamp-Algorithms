const spinalCase = str => {
	// First regex handles camelCase splitting. ThisIs = This-Is
	// 2nd regex turns spaces into -
	return str
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/\s+|_+/g, "-")
		.toLowerCase();
};

spinalCase("This Is Spinal Tap");
