const sum = require('./add.js')

test('when sum function is called it adds the parameters and returns the sum', () => {
    expect(sum(4, 6)).toBe(10);
});
test('when sum function called with string it should return an error', () => {
    expect(sum('four', 'six')).toBe('error');
});
test('when sum function called with boolean it should return an error', () => {
    expect(sum(true, false)).toBe('error');
});