const add = require("./add");
const multiply = require("./multiply");

test('when the result of add is multiplied by a number we return the correct total', () => {

    //Arrange
    //Act
    var resultOfAdd = add(4, 6)
    var total = multiply(resultOfAdd, 12)
    //Assert
    expect(total).toBe(120);
});

