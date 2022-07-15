const capitalize = require("../capitalize");

test("capitalize abcd to Abcd", () => {
	expect(capitalize("abcd")).toBe("Abcd");
});
