// Intern-Class.js Testing code:
// The purpose of this test file is to test the "Intern-Class.js" file using jest.
// Test will check the following:
// Test that the Intern Class can Instatiate another object.
// Test that the new object can set a gitHub properties via its constructor.
// Test inherited properties from Employee
// Test each of the 2 methods getSchool() & getRole() return values.
// The test is run in the console with the command: > npm run test



const Intern = require("../lib/Intern-Class");

test("I Can set my school via the constructor", () => {
  const schoolTestValue = "NYIT";
  const newInstance = new Intern("internName", 101, "intern@eMailTest.com", schoolTestValue);
  expect(newInstance.school).toBe(schoolTestValue);
});

test("Can get school via getSchool()", () => {
  const schoolTestValue = "NYIT";
  const newInstance = new Intern("internName", 101, "intern@eMailTest.com", schoolTestValue);
  expect(newInstance.getSchool()).toBe(schoolTestValue);
});

test("getRole() should return \"Intern\"", () => {
  const schoolTestValue = "Intern";
  const newInstance = new Intern("internName", 101, "intern@eMailTest.com", "NYIT");
  expect(newInstance.getRole()).toBe(schoolTestValue);
});


