// Generated from: tests\features\inventory.feature
import { test } from "../../../fixtures/test.ts";

test.describe('Browse and sort products', () => {

  test.beforeEach('Background', async ({ Given, actions }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as "standard_user"', null, { actions }); 
  });
  
  test('View inventory list', { tag: ['@regression', '@inventory'] }, async ({ Then, And, pages }) => { 
    await Then('I should see the inventory page', null, { pages }); 
    await And('I should see at least 1 product', null, { pages }); 
  });

  test('Add multiple products to cart', { tag: ['@regression', '@inventory'] }, async ({ When, Then, And, pages }) => { 
    await When('I add product "Sauce Labs Backpack" to the cart', null, { pages }); 
    await And('I add product "Sauce Labs Bike Light" to the cart', null, { pages }); 
    await Then('the cart badge should show 2', null, { pages }); 
  });

  test('Remove product from cart on inventory page', { tag: ['@regression', '@inventory'] }, async ({ Given, When, Then, pages }) => { 
    await Given('I have added product "Sauce Labs Backpack" to the cart', null, { pages }); 
    await When('I remove product "Sauce Labs Backpack" from the cart', null, { pages }); 
    await Then('the cart badge should show 0', null, { pages }); 
  });

  test.describe('Sort products', () => {

    test('Example #1', { tag: ['@regression', '@inventory'] }, async ({ When, Then, pages }) => { 
      await When('I sort products by "Name (A to Z)"', null, { pages }); 
      await Then('the products should be sorted by "Name (A to Z)"'); 
    });

    test('Example #2', { tag: ['@regression', '@inventory'] }, async ({ When, Then, pages }) => { 
      await When('I sort products by "Name (Z to A)"', null, { pages }); 
      await Then('the products should be sorted by "Name (Z to A)"'); 
    });

    test('Example #3', { tag: ['@regression', '@inventory'] }, async ({ When, Then, pages }) => { 
      await When('I sort products by "Price (low to high)"', null, { pages }); 
      await Then('the products should be sorted by "Price (low to high)"'); 
    });

    test('Example #4', { tag: ['@regression', '@inventory'] }, async ({ When, Then, pages }) => { 
      await When('I sort products by "Price (high to low)"', null, { pages }); 
      await Then('the products should be sorted by "Price (high to low)"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the inventory page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I should see at least 1 product","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I add product \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":14,"value":"\"Sauce Labs Backpack\"","children":[{"start":15,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I add product \"Sauce Labs Bike Light\" to the cart","stepMatchArguments":[{"group":{"start":14,"value":"\"Sauce Labs Bike Light\"","children":[{"start":15,"value":"Sauce Labs Bike Light","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show 2","stepMatchArguments":[{"group":{"start":27,"value":"2","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":21,"pickleLine":16,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I have added product \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":21,"value":"\"Sauce Labs Backpack\"","children":[{"start":22,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I remove product \"Sauce Labs Backpack\" from the cart","stepMatchArguments":[{"group":{"start":17,"value":"\"Sauce Labs Backpack\"","children":[{"start":18,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show 0","stepMatchArguments":[{"group":{"start":27,"value":"0","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":29,"pickleLine":27,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name (A to Z)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name (A to Z)\"","children":[{"start":20,"value":"Name (A to Z)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the products should be sorted by \"Name (A to Z)\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Name (A to Z)\"","children":[{"start":34,"value":"Name (A to Z)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":28,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name (Z to A)\"","children":[{"start":20,"value":"Name (Z to A)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the products should be sorted by \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Name (Z to A)\"","children":[{"start":34,"value":"Name (Z to A)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":39,"pickleLine":29,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price (low to high)\"","children":[{"start":20,"value":"Price (low to high)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the products should be sorted by \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Price (low to high)\"","children":[{"start":34,"value":"Price (low to high)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":30,"tags":["@regression","@inventory"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price (high to low)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price (high to low)\"","children":[{"start":20,"value":"Price (high to low)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the products should be sorted by \"Price (high to low)\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Price (high to low)\"","children":[{"start":34,"value":"Price (high to low)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end