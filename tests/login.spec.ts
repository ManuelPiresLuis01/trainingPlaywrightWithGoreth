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

  test("SL3 - Validar funcionamento do Botão Login", async ({ page }) => {
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
    await test.step("E EU VER O BOTÃO LOGIN", async () => {
      await expect(page.locator('[data-test="login-button"]')).toBeVisible()
    });
    await test.step("ENTÃO O BOTÃO DEVE ESTAR HABILITADO", async () => {
      await expect(page.locator('[data-test="login-button"]')).toBeEnabled()
    })
  });

  test("SL4 - Validar Login com sucesso", async ({ page }) => {
    await test.step("QUANDO A PAGINA JA ESTIVER VCARREGADA", async () => {
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
    await test.step("E EU PRENCHER INPUT USERNAME", async () => {
      await page.locator('[data-test="username"]').fill("standard_user");
    });
    await test.step("E EU PRENCHER INPUT PASSWORD", async () => {
      await page.locator('[data-test="password"]').fill("secret_sauce");
    });
    await test.step("E EU CLICAR NO BOTÃO DE LOGIN", async () => {
      await page.locator('[data-test="login-button"]').click();
    });
    await test.step("ENTÃO VALIDO LOGIN COM SUCESSO", async () => {
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    });
  });

  test("SL5 - Validar lOGIN COM CREDENCIAIS ERRADAS", async ({ page }) => {
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
    await test.step("E EU PRENCHER INPUT USERNAME", async () => {
      await page.locator('[data-test="username"]').fill("standard_userrr")
    });
    await test.step("E EU PRENCHER INPUT PASSWORD", async () => {
      await page.locator('[data-test="password"]').fill("secret_sauceee")
    });
    await test.step("E EU CLICAR NO BOTÃO DE LOGIN", async () => {
      await expect(page.locator('[data-test="login-button"]')).toBeEnabled()
    });
    await test.step("ENTÃO VALIDO LOGIN FALHOU", async () => {
      await page.locator('[data-test="login-button"]').click()
      await expect(page.locator('[data-test="error"]')).toBeVisible()
    });
  })
  
})



// POM - PAGE OBJECT MODEL