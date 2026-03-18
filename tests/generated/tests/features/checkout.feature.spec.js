// Generated from: tests\features\checkout.feature
import { test } from "../../../fixtures/test.ts";

test.describe('Complete checkout', () => {

  test.beforeEach('Background', async ({ Given, And, actions, pages }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as "standard_user"', null, { actions }); 
    await And('I have added product "Sauce Labs Backpack" to the cart', null, { pages }); 
    await And('I open the cart', null, { actions }); 
  });
  
  test('Successful checkout', { tag: ['@smoke', '@checkout'] }, async ({ When, Then, And, pages }) => { 
    await When('I proceed to checkout', null, { pages }); 
    await And('I fill checkout information with:', {"dataTable":{"rows":[{"cells":[{"value":"firstName"},{"value":"John"}]},{"cells":[{"value":"lastName"},{"value":"Doe"}]},{"cells":[{"value":"postalCode"},{"value":"12345"}]}]}}, { pages }); 
    await And('I continue to overview', null, { pages }); 
    await And('I finish the checkout', null, { pages }); 
    await Then('I should see checkout complete message', null, { pages }); 
  });

  test('Checkout info validation', { tag: ['@smoke', '@checkout'] }, async ({ When, Then, And, pages }) => { 
    await When('I proceed to checkout', null, { pages }); 
    await And('I try to continue to overview', null, { pages }); 
    await Then('I should see checkout error containing "Error"', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":9,"tags":["@smoke","@checkout"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I have added product \"Sauce Labs Backpack\" to the cart","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I open the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I fill checkout information with:","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I continue to overview","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I finish the checkout","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see checkout complete message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":["@smoke","@checkout"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I have added product \"Sauce Labs Backpack\" to the cart","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I open the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I try to continue to overview","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see checkout error containing \"Error\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Error\"","children":[{"start":40,"value":"Error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end