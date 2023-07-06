const add = require('./add.js')

test('when add function is called it adds the parameters and returns the sum', () => {
    //Act
    var total = add(4,6)
    //Assert
    expect(total).toBe(10);
});
test('when add function called with string it should return an error', () => {
    //Act
    var total = add('four', 'six')
    //Assert
    expect(total).toBe('error');
});
test('when add function called with boolean it should return an error', () => {
    //Arrange
    //Act
    var total = add(true, false)
    //Assert 
    expect(total).toBe('error');
});
test('when add function is called with four numbers it returns the sum', () => {
    //Act
    var total = add(4,6,7,10)
    //Assert
    expect(total).toBe(27);
});