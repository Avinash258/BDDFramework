import { test as base } from 'playwright-bdd';
import { expect, type Page } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { Menu } from '../../src/pages/Menu';
import { AuthActions } from '../../src/actions/AuthActions';
import { InventoryActions } from '../../src/actions/InventoryActions';
import { CartActions } from '../../src/actions/CartActions';
import { CheckoutActions } from '../../src/actions/CheckoutActions';
import { MenuActions } from '../../src/actions/MenuActions';

export type AppUser = {
  username: string;
  password: string;
};

export type Pages = {
  login: LoginPage;
  inventory: InventoryPage;
  cart: CartPage;
  checkout: CheckoutPage;
  menu: Menu;
};

export type Actions = {
  auth: AuthActions;
  inventory: InventoryActions;
  cart: CartActions;
  checkout: CheckoutActions;
  menu: MenuActions;
};

type Fixtures = {
  user: AppUser;
  pages: Pages;
  actions: Actions;
};

function buildPages(page: Page): Pages {
  return {
    login: new LoginPage(page),
    inventory: new InventoryPage(page),
    cart: new CartPage(page),
    checkout: new CheckoutPage(page),
    menu: new Menu(page),
  };
}

function buildActions(page: Page): Actions {
  return {
    auth: new AuthActions(page),
    inventory: new InventoryActions(page),
    cart: new CartActions(page),
    checkout: new CheckoutActions(page),
    menu: new MenuActions(page),
  };
}

export const test = base.extend<Fixtures>({
  user: async ({}, use) => {
    await use({ username: 'standard_user', password: 'secret_sauce' });
  },
  pages: async ({ page }, use) => {
    await use(buildPages(page));
  },
  actions: async ({ page }, use) => {
    await use(buildActions(page));
  },
});

export { expect };

