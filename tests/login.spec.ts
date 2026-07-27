import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await test.step("DADO que acedo a pagina saucedemo.com", async () => {
    await page.goto("https://www.saucedemo.com/");
  });
});

test.describe("SL Testar Login da Sauce Demo", () => {
  test("SL1 - Validar funcionamento do input Username", async ({ page }) => {
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
    await test.step("E EU VER O INPUT USERNAME", async () => {
      await expect(page.locator('[data-test="username"]')).toBeVisible();
    });
    await test.step("E o input estar habilitado", async () => {
      await expect(page.locator('[data-test="username"]')).toBeEnabled();
    });
    await test.step("então devo conseguir escrever standard_user", async () => {
      await page.locator('[data-test="username"]').fill("standard_user");
    });
  });

   test("SL2 - Validar funcionamento do Input Password", async ({ page }) => {
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
    await test.step("E EU VER O INPUT PASSWORD", async () => {
      await expect(page.locator('[data-test="password"]')).toBeVisible();
    });
    await test.step("E o input estar habilitado", async () => {
      await expect(page.locator('[data-test="password"]')).toBeEnabled();
    });
    await test.step("então devo conseguir escrever secret_sauce", async () => {
      await page.locator('[data-test="password"]').fill("secret_sauce");
    });
  });
});



// POM - PAGE OBJECT MODEL