import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { Given, When, Then } = createBdd(test);

When('I open the menu', async ({ pages }) => {
  await pages.menu.openMenu();
});

When('I click logout', async ({ pages }) => {
  await pages.menu.clickLogout();
});

When('I reset app state', async ({ pages }) => {
  await pages.menu.resetAppState();
});

Then('I should be on the login page from menu', async ({ pages }) => {
  await expect(pages.login.usernameInput).toBeVisible();
});

Given('I have added product {string} to the cart from menu', async ({ pages }, name: string) => {
  await pages.inventory.addProductByName(name);
});

