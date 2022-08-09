const Employee = require('./Employee');
class Manager extends Employee {
    
    constructor(name, id, email) {
        super(name, id, email);
        this.getOfficeNumber = officeNumber;
    }
    
    getRole() {
        return 'Manager'
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
}

module.exports = Manager;