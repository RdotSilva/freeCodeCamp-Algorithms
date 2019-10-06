// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection
//  if it is to be included in the returned array.

const whatIsInAName = (collection, source) => {
	// Array of keys located in source
	let sourceArray = Object.keys(source);
	console.log(sourceArray);

	return collection.filter(item => {
		return sourceArray.every(key => {
			return item[key] === source[key];
		});
	});
};

whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" }
	],
	{ last: "Capulet" }
);
