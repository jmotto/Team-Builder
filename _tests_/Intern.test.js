const Intern = require('../lib/Intern');

describe("Intern", () => {
    const name = "Joe Intern";
    const id = 246810;
    const email = "joe@intern.com";
    const school = "University of Washington";
    const role = "Intern";

    const testIntern = new Intern(name, id, email, school);

    it("should return Intern name", () => {
        
        expect(testIntern.getName()).toBe(name);
    })

    it("should return Intern id", () => {
        
        expect(testIntern.getId()).toBe(id);
    })

    it("should return Intern email", () => {
        
        expect(testIntern.getEmail()).toBe(email);
    })

    it("should return Intern school", () => {
        
        expect(testIntern.getSchool()).toBe(school);
    })

});