const reverseString = require("../reverseString");

test("reverse the abcd to dcba", () => {
	expect(reverseString("abcd")).toBe("dcba");
});
