
// Employee-Class.js Testing code:
// The purpose of this test file is to test the "Employee-Class.js" file using jest.
// Test will check the following:
// Test that the Employee Class can Instatiate another object.
// Test that the new object can set a name, id & eMail via its constructor.
// Test each of the 4 methods return values.
// The test is run in the console with the command: > npm run test


const Employee = require("../lib/Employee-Class");

describe("Employee", () =>{
    // Object creation test:
    it("I can create an object instance from the Employee-Class.js file", ()=>{
        const newInstance = new Employee();
        expect(typeof(newInstance)).toBe("object");
        console.log("testing for an object, expected: ", newInstance);
    });
    // Object Property: name test
    it("I can set the name property via the class constructor argument", () => {
        const name = "streamingTurtles";
        const newInstance = new Employee(name);
        expect(newInstance.name).toBe(name);
        console.log("testing for the property, a name is expected: ", name);
    });
    // Object Property: name, id test
    it("I can set the id property via the class constructor argument", () =>{
        const id = 1000;  
        const newInstance = new Employee("streamingTurtles", id);
        expect(newInstance.id).toBe(id);
        console.log("testing for property, the id is expected: ", id);
    });
    // Object Property: name, id, eMail test
    it("I can set the id property via the class constructor argument", () =>{
        const eMail = "pcardillo@streamingTurtles.com";  
        const newInstance = new Employee("streamingTurtles", 1000, eMail);
        expect(newInstance.eMail).toBe(eMail);
        console.log("testing for property, the eMail is expected: ", eMail);
    });

describe("getName", () =>{
    // Object Method getName() test
    it("I can return the name property via the getName() method", () =>{
        const name = "streamingTurtles-PAC";
        const newInstance = new Employee(name);
        expect(newInstance.getName()).toBe(name);
        console.log("testing the getName() method, expected name property returned: ", name);
    });
});   

describe("getId", () =>{
    // Object Method getId() test
    it("I can return the ID property via the getId() method", () =>{
        const id = 1001;
        const newInstance = new Employee("streamingTurtles are cool",id);
        expect(newInstance.getId()).toBe(id);
        console.log("testing the getId() method, expected id property returned: ", id);
    });
});

describe("geteMail", () =>{
    // Object Method geteMail() test
    it("I can return the eMail property via the geteMail() method", () =>{
        const eMail = "pcardillo@streamingTurtles.com";
        const newInstance = new Employee("streamingTurtles, LLC ",11229, eMail);
        expect(newInstance.geteMail()).toBe(eMail);
        console.log("testing the geteMail() method, expected eMail property returned: ", eMail);
    });
});

describe("geteRole", () =>{
    // Object Method geteRole() test
    it("I can return the Role value via the getRole() method", () =>{
        const role = "Employee";
        const newInstance = new Employee("streamingTurtles, LLC ",11229, "pacardillo@streamingTutles.com");
        expect(newInstance.getRole()).toBe(role);
        console.log("testing the getRole() method, expected Role value returned: ", role);
    });
});


});



