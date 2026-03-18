// Generated from: tests\features\cart.feature
import { test } from "../../../fixtures/test.ts";

test.describe('Cart management', () => {

  test.beforeEach('Background', async ({ Given, And, actions, pages }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as "standard_user"', null, { actions }); 
    await And('I have added product "Sauce Labs Backpack" to the cart', null, { pages }); 
  });
  
  test('View cart', { tag: ['@regression', '@cart'] }, async ({ When, Then, actions, pages }) => { 
    await When('I open the cart', null, { actions }); 
    await Then('I should see product "Sauce Labs Backpack" in the cart', null, { pages }); 
  });

  test('Remove item from cart', { tag: ['@regression', '@cart'] }, async ({ When, Then, And, actions, pages }) => { 
    await When('I open the cart', null, { actions }); 
    await And('I remove product "Sauce Labs Backpack" from the cart on cart page', null, { pages }); 
    await Then('I should not see product "Sauce Labs Backpack" in the cart', null, { pages }); 
    await And('the cart badge should show 0', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@regression","@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I have added product \"Sauce Labs Backpack\" to the cart","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I open the cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see product \"Sauce Labs Backpack\" in the cart","stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":["@regression","@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I have added product \"Sauce Labs Backpack\" to the cart","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the cart","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I remove product \"Sauce Labs Backpack\" from the cart on cart page","stepMatchArguments":[{"group":{"start":17,"value":"\"Sauce Labs Backpack\"","children":[{"start":18,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should not see product \"Sauce Labs Backpack\" in the cart","stepMatchArguments":[{"group":{"start":25,"value":"\"Sauce Labs Backpack\"","children":[{"start":26,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the cart badge should show 0","stepMatchArguments":[{"group":{"start":27,"value":"0","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end