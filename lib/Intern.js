const Employee = require('./Employee');
class Intern extends Employee {
    
    constructor(name, id, email) {
        super(name, id, email);
        this.school = school;
    }
    
    getRole() {
        return 'Engineer'
    }

    getSchool() {
        return 
    }
}

module.exports = Intern;