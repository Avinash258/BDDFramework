import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { Given, Then } = createBdd(test);

Given('I am on the login page', async ({ pages }) => {
  await pages.login.goto();
});

Given('I am logged in as {string}', async ({ actions }, username: string) => {
  await actions.auth.loginAs(username);
});

Then('I should be on the login page', async ({ page }) => {
  await page.waitForURL('**/');
  await page.getByPlaceholder('Username').isVisible();
});

