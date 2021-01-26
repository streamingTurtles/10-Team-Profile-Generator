
// Testing Manager-Class.js file:
// The purpose of this test file is to test the "Manager-Class.js" file using jest.
// Test will check the following:
// Test that the Manager Class can Instatiate another object.
// Test that the new object can set a gitHub properties via its constructor.
// Test inherited properties from Employee
// Test each of the 2 methods getOfficeNumber() & getRole() return values.
// The test is run in the console with the command: > npm run test



const Manager = require("../lib/Manager-Class");

test("I Can set the managers office number via constructor argument", () => {
  const officeNumTestValue = 9171234567;
  const newInstance = new Manager("testName", 1, "manager@eMailTest.com", officeNumTestValue);
  expect(newInstance.officeNumber).toBe(officeNumTestValue);
});

test("getRole() should return \"Manager\"", () => {
  const officeNumTestValue = "Manager";
  const newInstance = new Manager("testName", 1, "manager@eMailTest.com", 9171234567);
  expect(newInstance.getRole()).toBe(officeNumTestValue);
});

test("Can the get office number via getOffice()", () => {
  const officeNumTestValue = 9171234567;
  const newInstance = new Manager("testName", 1, "manager@eMailTest.com", officeNumTestValue);
  expect(newInstance.getOfficeNumber()).toBe(officeNumTestValue);
});