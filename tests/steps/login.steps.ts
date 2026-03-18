import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { When, Then } = createBdd(test);

When('I login as {string} with password {string}', async ({ pages }, username: string, password: string) => {
  await pages.login.goto();
  await pages.login.login(username, password);
});

Then('I should see the inventory page', async ({ pages }) => {
  await pages.inventory.expectLoaded();
});

Then('I should see error message containing {string}', async ({ pages }, message: string) => {
  await pages.login.expectErrorContains(message);
});

