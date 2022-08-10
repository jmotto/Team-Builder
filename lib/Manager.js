
const Employee = require('./Employee');

// manager class extends to employee class
class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return 'Manager'
    }

    officeNumber () {
        return this.officeNumber;
    }
}

module.exports = Manager;