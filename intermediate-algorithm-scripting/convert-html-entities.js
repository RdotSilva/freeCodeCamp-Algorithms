// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

// HTML ENTITIES KEY
// & = &amp;
// < = &lt;
// > = &gt;
// " = &quot;
// ' = &apos;

const convertHTML = str => {
	let stringArray = str.split("");

	for (let i = 0; i < stringArray.length; i++) {
		switch (stringArray[i]) {
			case "&":
				stringArray[i] = "&amp;";
				break;
			case "<":
				stringArray[i] = "&lt;";
				break;
			case ">":
				stringArray[i] = "&gt;";
				break;
			case '"':
				stringArray[i] = "&quot;";
				break;
			case "'":
				stringArray[i] = "&apos;";
				break;
		}
	}
	return stringArray.join("");
};

convertHTML("Dolce & Gabbana");
