import { Page } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

export class InventoryActions {
  constructor(private readonly page: Page) {}

  async addProductsToCart(names: string[]) {
    const inventory = new InventoryPage(this.page);
    for (const name of names) {
      await inventory.addProductByName(name);
    }
  }

  async openCart() {
    const inventory = new InventoryPage(this.page);
    await inventory.goToCart();
  }
}

