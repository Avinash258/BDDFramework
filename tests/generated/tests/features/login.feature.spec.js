// Generated from: tests\features\login.feature
import { test } from "../../../fixtures/test.ts";

test.describe('Login to Swag Labs', () => {

  test.beforeEach('Background', async ({ Given, pages }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { pages }); 
  });
  
  test('Successful login with standard user', { tag: ['@smoke', '@login'] }, async ({ When, Then, pages }) => { 
    await When('I login as "standard_user" with password "secret_sauce"', null, { pages }); 
    await Then('I should see the inventory page', null, { pages }); 
  });

  test('Login with locked out user', { tag: ['@smoke', '@login'] }, async ({ When, Then, pages }) => { 
    await When('I login as "locked_out_user" with password "secret_sauce"', null, { pages }); 
    await Then('I should see error message containing "Sorry, this user has been locked out"', null, { pages }); 
  });

  test.describe('Login validation errors', () => {

    test('Example #1', { tag: ['@smoke', '@login'] }, async ({ When, Then, pages }) => { 
      await When('I login as "" with password ""', null, { pages }); 
      await Then('I should see error message containing "Username is required"', null, { pages }); 
    });

    test('Example #2', { tag: ['@smoke', '@login'] }, async ({ When, Then, pages }) => { 
      await When('I login as "standard_user" with password ""', null, { pages }); 
      await Then('I should see error message containing "Password is required"', null, { pages }); 
    });

    test('Example #3', { tag: ['@smoke', '@login'] }, async ({ When, Then, pages }) => { 
      await When('I login as "invalid_user" with password "wrong_pass"', null, { pages }); 
      await Then('I should see error message containing "Username and password do not match any user"', null, { pages }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@smoke","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":11,"value":"\"standard_user\"","children":[{"start":12,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"secret_sauce\"","children":[{"start":42,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the inventory page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":["@smoke","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I login as \"locked_out_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":11,"value":"\"locked_out_user\"","children":[{"start":12,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"secret_sauce\"","children":[{"start":44,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see error message containing \"Sorry, this user has been locked out\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Sorry, this user has been locked out\"","children":[{"start":39,"value":"Sorry, this user has been locked out","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":21,"tags":["@smoke","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I login as \"\" with password \"\"","stepMatchArguments":[{"group":{"start":11,"value":"\"\"","children":[{"start":12,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"\"","children":[{"start":29,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see error message containing \"Username is required\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Username is required\"","children":[{"start":39,"value":"Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":22,"tags":["@smoke","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I login as \"standard_user\" with password \"\"","stepMatchArguments":[{"group":{"start":11,"value":"\"standard_user\"","children":[{"start":12,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"\"","children":[{"start":42,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see error message containing \"Password is required\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Password is required\"","children":[{"start":39,"value":"Password is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":23,"tags":["@smoke","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I login as \"invalid_user\" with password \"wrong_pass\"","stepMatchArguments":[{"group":{"start":11,"value":"\"invalid_user\"","children":[{"start":12,"value":"invalid_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"wrong_pass\"","children":[{"start":41,"value":"wrong_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see error message containing \"Username and password do not match any user\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Username and password do not match any user\"","children":[{"start":39,"value":"Username and password do not match any user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end