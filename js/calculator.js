const calculator = {
	add(num1, num2) {
		num1 = Number(num1);
		num2 = Number(num2);
		return num1 + num2;
	},
	subtract(num1, num2) {
		num1 = Number(num1);
		num2 = Number(num2);
		return num1 - num2;
	},
	multiply(num1, num2) {
		num1 = Number(num1);
		num2 = Number(num2);
		return num1 * num2;
	},
	divide(num1, num2) {
		num1 = Number(num1);
		num2 = Number(num2);
		return num1 / num2;
	},
};

module.exports = calculator;
