import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly sortSelect: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.sortSelect = page.locator('[data-test="product_sort_container"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async addProductByName(name: string) {
    const item = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });
    await item.locator('button:has-text("Add to cart")').click();
  }

  async removeProductByName(name: string) {
    const item = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });
    await item.locator('button:has-text("Remove")').click();
  }

  async openProductDetails(name: string) {
    await this.page.getByText(name).click();
  }

  async selectSort(
    option:
      | 'Name (A to Z)'
      | 'Name (Z to A)'
      | 'Price (low to high)'
      | 'Price (high to low)',
  ) {
    await this.sortSelect.selectOption({ label: option });
  }

  async sortByLabel(label: string) {
    await this.sortSelect.selectOption({ label });
  }

  async expectCartCount(count: number) {
    if (count === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(String(count));
    }
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}

