function caesarCipher(str) {
	str = str.toLowerCase();
	let cipheredStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === "z") {
			cipheredStr += "a";
		} else if (str.charAt(i).match(/[^A-Za-z0-9_]/)) {
			cipheredStr += str[i];
		} else {
			cipheredStr += String.fromCharCode(str.charAt(i).charCodeAt() + 1);
		}
	}
	return cipheredStr;
}
module.exports = caesarCipher;
