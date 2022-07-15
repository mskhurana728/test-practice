const calculator = require("../calculator");

test("10 + 20 is 30", () => {
	expect(calculator.add(10, 20)).toBe(30);
});
test("20 - 10 is 10", () => {
	expect(calculator.subtract(20, 10)).toBe(10);
});
test("10 * 20 is 200", () => {
	expect(calculator.multiply(10, 20)).toBe(200);
});
test("20 / 10 is 2", () => {
	expect(calculator.divide(20, 10)).toBe(2);
});
