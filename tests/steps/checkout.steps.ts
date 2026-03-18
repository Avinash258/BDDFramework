import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { When, Then } = createBdd(test);

When('I proceed to checkout', async ({ pages }) => {
  await pages.cart.proceedToCheckout();
  await pages.checkout.expectInfoStepLoaded();
});

When('I fill checkout information with:', async ({ pages }, table) => {
  const data = (table as { rowsHash: () => Record<string, string> }).rowsHash();
  await pages.checkout.fillInformation(
    data.firstName ?? '',
    data.lastName ?? '',
    data.postalCode ?? '',
  );
});

When('I continue to overview', async ({ pages }) => {
  await pages.checkout.continueToOverview();
  await pages.checkout.expectOverviewLoaded();
});

When('I try to continue to overview', async ({ pages }) => {
  await pages.checkout.continueToOverview();
});

When('I finish the checkout', async ({ pages }) => {
  await pages.checkout.finishCheckout();
});

Then('I should see checkout complete message', async ({ pages }) => {
  await pages.checkout.expectComplete();
});

Then('I should see checkout error containing {string}', async ({ pages }, text: string) => {
  await pages.checkout.expectErrorContains(text);
});

