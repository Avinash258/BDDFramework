# BBDFRamework (Playwright + Playwright-BDD) — Swag Labs

End-to-end test automation for [Swag Labs](https://www.saucedemo.com/) using:

- **Playwright Test**
- **Playwright-BDD** (Gherkin → generated Playwright tests)  
  Docs: `https://vitalets.github.io/playwright-bdd/#/`
- **Allure reporting**
- **Cucumber HTML + JSON reporting**
- **ESLint + TypeScript typecheck**
- **CI**: GitHub Actions + Azure Pipelines

---

## Requirements

- **Node.js 20+**
- **npm**

---

## Install

```bash
npm ci
npx playwright install
```

---

## How Playwright-BDD works

This project uses the standard 2-step flow from Playwright-BDD:

1. **Generate tests** from `.feature` files:

```bash
npx bddgen
```

2. **Run generated tests** with Playwright:

```bash
npx playwright test --project=chromium
```

Generated files go to `tests/generated` (do not edit them manually).

---

## Project structure

```text
src/
  pages/                  # Page Objects (locators + page-level actions)
  actions/                # Higher-level user flows

tests/
  features/               # Gherkin feature files (.feature)
  steps/                  # Step definitions (BDD bindings)
  fixtures/
    test.ts               # Custom fixtures: pages, actions, user
  generated/              # Auto-generated tests by bddgen

playwright.config.ts      # Playwright + BDD config + reporters
eslint.config.js          # ESLint flat config (TS + Playwright rules)
azure-pipelines.yml       # Azure DevOps pipeline
.github/workflows/ci.yml  # GitHub Actions pipeline
```

---

## Commands

### Generate BDD tests

```bash
npm run bddgen
```

### Run tests (Chrome)

```bash
npm run test:chrome
```

### Smoke / Regression

```bash
npm run test:smoke
npm run test:regression
```

### Lint / Typecheck

```bash
npm run lint
npm run typecheck
```

> PowerShell note: if you run Playwright directly, quote grep patterns:
>
> ```bash
> npx playwright test --project=chromium --grep "@smoke"
> ```

---

## Fixtures (best practice)

Custom fixtures live in `tests/fixtures/test.ts` and are used by all step definitions.

Available fixtures in steps:

- **`pages`**: `login`, `inventory`, `cart`, `checkout`, `menu`
- **`actions`**: `auth`, `inventory`, `cart`, `checkout`, `menu`
- **`user`**: default user credentials (standard_user / secret_sauce)

This keeps steps short, consistent, and easy to maintain.

---

## Reporting

Configured in `playwright.config.ts`:

- **Playwright HTML report** → `playwright-report/`
- **Allure results** → `allure-results/`
- **Cucumber HTML report** → `cucumber-report/index.html`
- **Cucumber JSON report** → `cucumber-report/report.json`

### View Playwright report

```bash
npx playwright show-report
```

### View Allure report

If you have Allure CLI installed:

```bash
allure serve allure-results
```

### View Cucumber HTML report

Open `cucumber-report/index.html` in a browser.

If you enable `externalAttachments` in the future, serve via HTTP (recommended by the Playwright-BDD docs):

```bash
npx http-server ./cucumber-report -c-1 -a localhost -o index.html
```

---

## CI

### GitHub Actions

Workflow: `.github/workflows/ci.yml`

Runs:
- `npm ci`
- `npx playwright install`
- `npx bddgen`
- `npm run lint`
- `npm run typecheck`
- `npm run test:smoke`

Uploads artifacts:
- `playwright-report/`
- `allure-results/`
- `cucumber-report/`

### Azure DevOps

Pipeline: `azure-pipelines.yml`

Runs the same steps and publishes the same artifacts as pipeline artifacts.

---

## Notes / troubleshooting

- **Do not edit** `tests/generated/**` directly (always regenerate via `bddgen`).
- If selectors change on Swag Labs, update the corresponding page object in `src/pages/**`.

