import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async expectProductInCart(name: string) {
    const item = this.cartItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });
    await expect(item).toHaveCount(1);
  }

  async expectProductNotInCart(name: string) {
    const item = this.cartItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });
    await expect(item).toHaveCount(0);
  }

  async removeProduct(name: string) {
    const item = this.cartItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });
    await item.locator('button:has-text("Remove")').click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}

