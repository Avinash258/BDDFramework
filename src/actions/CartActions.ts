import { Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

export class CartActions {
  constructor(private readonly page: Page) {}

  async removeProduct(name: string) {
    const cart = new CartPage(this.page);
    await cart.removeProduct(name);
  }
}

