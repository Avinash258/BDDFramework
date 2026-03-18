import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { When, Then } = createBdd(test);

Then('I should see product {string} in the cart', async ({ pages }, name: string) => {
  await pages.cart.expectLoaded();
  await pages.cart.expectProductInCart(name);
});

Then('I should not see product {string} in the cart', async ({ pages }, name: string) => {
  await pages.cart.expectLoaded();
  await pages.cart.expectProductNotInCart(name);
});

When('I remove product {string} from the cart on cart page', async ({ pages }, name: string) => {
  await pages.cart.removeProduct(name);
});

