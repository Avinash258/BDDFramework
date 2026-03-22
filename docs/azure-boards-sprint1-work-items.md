# Azure Boards — Sprint 1 work items (from automated tests)

Organization: `InnoVisionDA`  
Project: `PlaywrightLearning`  
Target iteration: **Sprint 1** (adjust `IterationPath` to match your team’s path in Azure DevOps)

These map **1:1** to executable Playwright-BDD scenarios (including each `Scenario Outline` example row).

| # | Title | Feature file | Tags |
|---|--------|----------------|------|
| 1 | Login — Successful login with standard user | `tests/features/login.feature` | @smoke @login |
| 2 | Login — Login with locked out user | `tests/features/login.feature` | @smoke @login |
| 3 | Login — Validation: Username is required | `tests/features/login.feature` | @smoke @login |
| 4 | Login — Validation: Password is required | `tests/features/login.feature` | @smoke @login |
| 5 | Login — Validation: Invalid username/password | `tests/features/login.feature` | @smoke @login |
| 6 | Inventory — View inventory list | `tests/features/inventory.feature` | @regression @inventory |
| 7 | Inventory — Add multiple products to cart | `tests/features/inventory.feature` | @regression @inventory |
| 8 | Inventory — Remove product from cart on inventory page | `tests/features/inventory.feature` | @regression @inventory |
| 9 | Inventory — Sort products: Name (A to Z) | `tests/features/inventory.feature` | @regression @inventory |
| 10 | Inventory — Sort products: Name (Z to A) | `tests/features/inventory.feature` | @regression @inventory |
| 11 | Inventory — Sort products: Price (low to high) | `tests/features/inventory.feature` | @regression @inventory |
| 12 | Inventory — Sort products: Price (high to low) | `tests/features/inventory.feature` | @regression @inventory |
| 13 | Cart — View cart | `tests/features/cart.feature` | @regression @cart |
| 14 | Cart — Remove item from cart | `tests/features/cart.feature` | @regression @cart |
| 15 | Checkout — Successful checkout | `tests/features/checkout.feature` | @smoke @checkout |
| 16 | Checkout — Checkout info validation | `tests/features/checkout.feature` | @smoke @checkout |
| 17 | Menu — Logout from menu | `tests/features/menu.feature` | @regression @menu |
| 18 | Menu — Reset app state | `tests/features/menu.feature` | @regression @menu |

## Find your Sprint 1 iteration path

1. Open **Boards → Sprints** and select **Sprint 1**.
2. Note the iteration path (often `PlaywrightLearning\Sprint 1` or `PlaywrightLearning\TeamName\Sprint 1`).
3. Set the same value in `scripts/create-azure-boards-sprint1-items.ps1` as `$IterationPath`.

## Create items automatically

See `scripts/create-azure-boards-sprint1-items.ps1` (requires a **PAT** with **Work Items: Read & write**).
