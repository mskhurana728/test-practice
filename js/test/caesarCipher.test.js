const caesarCipher = require("../caesarCipher");

test("xy,z cipher to yz,a", () => {
	expect(caesarCipher("xy,z")).toBe("yz,a");
});
