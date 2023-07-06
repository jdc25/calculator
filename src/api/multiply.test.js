const multiply = require("./multiply");

test('when multiply function called with string it should return an error', () => {
    expect(multiply('four', 'six')).toBe('error');
});
test('when multiply function called with boolean it should return an error', () => {
    expect(multiply(true, false)).toBe('error');
});
test('when multiply function is called it multiplies the parameters and returns the sum', () => {
    expect(multiply(4, 6)).toBe(24);
});