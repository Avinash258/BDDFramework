import { Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export class CheckoutActions {
  constructor(private readonly page: Page) {}

  async completeCheckout(firstName: string, lastName: string, postalCode: string) {
    const cart = new CartPage(this.page);
    const checkout = new CheckoutPage(this.page);

    await cart.proceedToCheckout();
    await checkout.expectInfoStepLoaded();
    await checkout.fillInformation(firstName, lastName, postalCode);
    await checkout.continueToOverview();
    await checkout.expectOverviewLoaded();
    await checkout.finishCheckout();
    await checkout.expectComplete();
  }
}

