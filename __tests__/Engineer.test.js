// Engineer-Class.js Testing code:
// The purpose of this test file is to test the "Engineer-Class.js" file using jest.
// Test will check the following:
// Test that the Engineer Class can Instatiate another object.
// Test that the new object can set a gitHub properties via its constructor.
// Test inherited properties from Employee
// Test each of the 2 methods getGitHub() & getRole() return values.
// The test is run in the console with the command: > npm run test


const Engineer = require("../lib/Engineer-Class");

test("I can set the gitHub property via the class constructor argument", () => {
  const gitHubTestValue = "gitHub-User-test";
  // make new instance, inheriting values from super and test the additional property
  const newInstance = new Engineer("testName", 10017, "test-eMail@test.com", gitHubTestValue);
  expect(newInstance.gitHub).toBe(gitHubTestValue);
});
//
// testing getGitHub() method:
test("getGitHub() should return engineers gitHub username", () => {
    const gitHubTestValue = "gitHubUser";
    const newInstance = new Engineer("testName", 10017, "test-eMail@test.com", gitHubTestValue);
    console.log("Engineer Object getGitHub() method returned: ", newInstance.getGitHub());
    expect(newInstance.getGitHub()).toBe(gitHubTestValue);  
  });
//
// testing getRole() method:
test("getRole() should return \"Engineer\"", () => {
    const testEngineerValue = "Engineer";
    const newInstance = new Engineer("testName", 10017, "test-eMail@test.com", "gitHubTestValue");
    console.log("Engineer Object getRole() method returned: ", newInstance.getRole());
    expect(newInstance.getRole()).toBe(testEngineerValue);
  });




