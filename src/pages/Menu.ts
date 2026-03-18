import { Page, Locator, expect } from '@playwright/test';

export class Menu {
  readonly page: Page;
  readonly burgerButton: Locator;
  readonly closeButton: Locator;
  readonly allItemsLink: Locator;
  readonly aboutLink: Locator;
  readonly logoutLink: Locator;
  readonly resetAppStateLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.burgerButton = page.locator('#react-burger-menu-btn');
    this.closeButton = page.locator('#react-burger-cross-btn');
    this.allItemsLink = page.locator('#inventory_sidebar_link');
    this.aboutLink = page.locator('#about_sidebar_link');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.resetAppStateLink = page.locator('#reset_sidebar_link');
  }

  async openMenu() {
    await this.burgerButton.click();
    await expect(this.logoutLink).toBeVisible();
  }

  async closeMenu() {
    await this.closeButton.click();
    await expect(this.logoutLink).toBeHidden();
  }

  async clickAllItems() {
    await this.openMenu();
    await this.allItemsLink.click();
  }

  async clickAbout() {
    await this.openMenu();
    await this.aboutLink.click();
  }

  async clickLogout() {
    await this.openMenu();
    await this.logoutLink.click();
  }

  async resetAppState() {
    await this.openMenu();
    await this.resetAppStateLink.click();
  }
}

