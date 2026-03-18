import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export class AuthActions {
  constructor(private readonly page: Page) {}

  async loginAs(username: string, password: string = 'secret_sauce') {
    const loginPage = new LoginPage(this.page);
    await loginPage.goto();
    await loginPage.login(username, password);
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.expectLoaded();
  }
}

