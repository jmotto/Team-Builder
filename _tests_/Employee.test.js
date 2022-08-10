const Employee = require('../lib/Employee');

describe("Gets", () => {
    // Arrange
    const name = "Jane Doe";
    const id = 123456;
    const email = "jane@doe.com"
    const role = "Employee";

    // Act
    const testEmployee = new Employee(name, id, email, role);
    
    it("should return the Employee name when requested" , () => {
        // Assert
        expect(testEmployee.getName().toBe(name));
    });

    it("should return the Employee id when requested" , () => {
        expect(testEmployee.getId().toBe(id));
    });

    it("should return the Employee email when requested" , () => {
        expect(testEmployee.getEmail().toBe(email));
    });

    it("should return the Employee role when requested" , () => {
        expect(testEmployee.getRole().toBe(role));
    });

});