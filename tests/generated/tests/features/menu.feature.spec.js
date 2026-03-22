// Generated from: tests\features\menu.feature
import { test } from "../../../fixtures/test.ts";

test.describe('Menu actions', () => {

  test.beforeEach('Background', async ({ Given, actions }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as "standard_user"', null, { actions }); 
  });
  
  test('Logout from menu', { tag: ['@regression', '@menu'] }, async ({ When, Then, And, pages }) => { 
    await When('I open the menu', null, { pages }); 
    await And('I click logout', null, { pages }); 
    await Then('I should be on the login page from menu', null, { pages }); 
  });

  test('Reset app state', { tag: ['@regression', '@menu'] }, async ({ Given, When, Then, And, pages }) => { 
    await Given('I have added product "Sauce Labs Backpack" to the cart', null, { pages }); 
    await When('I open the menu', null, { pages }); 
    await And('I reset app state', null, { pages }); 
    await Then('the cart badge should show 0', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\menu.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@regression","@menu"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click logout","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be on the login page from menu","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":["@regression","@menu"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I have added product \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I open the menu","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I reset app state","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show 0","stepMatchArguments":[{"group":{"start":27,"value":"0","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end