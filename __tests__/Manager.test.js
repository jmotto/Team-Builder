const Manager = require('../lib/Manager');

describe("Manager", () => {
    const name = "Jamie Otto";
    const id = 13579;
    const email = "jamie@manager.com";
    const officeNumber = 108;
    const role = "Manager";

    const testManager = new Manager(name, id, email, officeNumber, role);

    it("should return Manager name", () => {
        
        expect(testManager.getName()).toBe(name);
    })

    it("should return Manager id", () => {
        
        expect(testManager.getId()).toBe(id);
    })

    it("should return Manager email", () => {
        
        expect(testManager.getEmail()).toBe(email);
    })

    it("should return Manager Office Number", () => {
        
        expect(testManager.getOfficeNumber()).toBe(officeNumber);
    })

    it("should return Manager role", () => {
        
        expect(testManager.getRole()).toBe(role);
    })
});

