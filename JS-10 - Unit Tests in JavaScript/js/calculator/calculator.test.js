const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 9 /3 equal to 3', () => {
  expect(calculator.divide(9,3)).toBe(3);
});

test('divide 8 /-4 equal to 3', () => {
  expect(calculator.divide(8,-4)).toBe(-2);
});



test('multiply -10 * 32 equal to -320', () => {
  expect(calculator.multiply(-10,32)).toBe(-320);
});

test('multiply 0 * 8 equal to 0', () => {
  expect(calculator.multiply(0,8)).toBe(0);
});

//Challenge
test('divide 2 /0 equal to infinity', () => {
  expect(calculator.divide(2,0)).toBe(undefined);
});



