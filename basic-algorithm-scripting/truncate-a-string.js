// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ...ending.

const truncateString = (str, num) => {
	return str.length > num
		? str.substring(0, num) + "..."
		: str.substring(0, num);
};

truncateString("A-tisket a-tasket A green and yellow basket", 8);
