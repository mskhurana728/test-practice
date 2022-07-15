function capitalize(string) {
	let capitalizedString = string;
	// capitalizedString.charAt(0) = capitalizedString.charAt(0).toUpperCase();

	return capitalizedString.charAt(0).toUpperCase() + capitalizedString.slice(1);
}
module.exports = capitalize;
