const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    const name = "Janet Engineer";
    const id = 987654;
    const email = "janet@engineer.com";
    const github = "janet";
    const role = "Engineer";

    const testEngineer = new Engineer(name, id, email, github, role);

    it("should return Engineer name", () => {
        
        expect(testEngineer.getName()).toBe(name);
    })

    it("should return Engineer id", () => {
        
        expect(testEngineer.getId()).toBe(id);
    })

    it("should return Engineer email", () => {
        
        expect(testEngineer.getEmail()).toBe(email);
    })

    it("should return Engineer github", () => {
        
        expect(testEngineer.getGithub()).toBe(github);
    })

    it("should return Engineer role", () => {
        
        expect(testEngineer.getRole()).toBe(role);
    })
});