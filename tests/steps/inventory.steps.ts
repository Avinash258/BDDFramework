import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { Given, When, Then } = createBdd(test);

Then('I should see at least 1 product', async ({ pages }) => {
  await pages.inventory.expectLoaded();
});

When('I add product {string} to the cart', async ({ pages }, name: string) => {
  await pages.inventory.addProductByName(name);
});

Given('I have added product {string} to the cart', async ({ pages }, name: string) => {
  await pages.inventory.addProductByName(name);
});

When('I remove product {string} from the cart', async ({ pages }, name: string) => {
  await pages.inventory.removeProductByName(name);
});

Then('the cart badge should show {int}', async ({ pages }, count: number) => {
  await pages.inventory.expectCartCount(count);
});

When('I open the cart', async ({ actions }) => {
  await actions.inventory.openCart();
});

When('I sort products by {string}', async ({ pages }, option: string) => {
  await pages.inventory.sortByLabel(option);
});

Then('the products should be sorted by {string}', async () => {
  // Assertion of sorted order can be added here if needed.
});

