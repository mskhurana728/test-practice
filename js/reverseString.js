function reverseString(string) {
	let reversedString = "";
	for (let i = 0; i < string.length; i++) {
		reversedString += string[string.length - 1 - i];
	}
	return reversedString;
}

module.exports = reverseString;
