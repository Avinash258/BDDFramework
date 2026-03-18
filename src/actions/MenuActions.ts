import { Page } from '@playwright/test';
import { Menu } from '../pages/Menu';

export class MenuActions {
  constructor(private readonly page: Page) {}

  async logout() {
    const menu = new Menu(this.page);
    await menu.clickLogout();
  }

  async resetAppState() {
    const menu = new Menu(this.page);
    await menu.resetAppState();
  }
}

