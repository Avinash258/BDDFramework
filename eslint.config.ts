import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  js.configs.recommended,
  // Type-checked rules only for TS — avoids errors on root *.js (e.g. db-connection-test.js in CI)
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'eslint.config.ts',
      'playwright-report/**',
      'allure-results/**',
      'test-results/**',
      'tests/generated/**',
      'cucumber-report/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
    },
  },
  {
    files: ['tests/**/*.ts', 'src/**/*.ts', 'playwright.config.ts'],
    plugins: {
      playwright,
    },
    rules: {
      ...(playwright.configs['playwright-test'] as any).rules,
      'playwright/no-standalone-expect': 'off',
    },
  },
);

