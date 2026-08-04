import { expect, test, Page, Locator } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
  }

  async validarPagina() {
    await test.step("Validar que a pagina esta carregada", async () => {
      await expect(this.page).toHaveURL("https://www.saucedemo.com/");
    });
  }

  async irParaSauceDemo() {
    await test.step("Aceder a www.saucedemo.com", async () => {
      await this.page.goto("https://www.saucedemo.com/");
    });
  }

  async validarVisibilidadeInput(input: string) {
    await test.step(`VALIDAR VISIBILIDADE DO INPUT ${input}`, async () => {
      if (input === "USERNAME") {
        await expect(this.username).toBeVisible();
      } else {
        await expect(this.password).toBeVisible();
      }
    });
  }

  async validarHabilitacaoInput(input: string) {
    await test.step(`VALIDAR HABILITAÇÃO DO INPUT ${input}`, async () => {
      if (input === "USERNAME") {
        await expect(this.username).toBeEnabled();
      } else if (input === "PASSWORD") {
        await expect(this.password).toBeEnabled();
      }
    });
  }

  async preencherInput(input: string, valor: string) {
    await test.step(`PREENCHER INPUT ${input} com o seguinte valor ${valor}`, async () => {
      if (input === "USERNAME") {
        await this.username.fill(valor);
      } else if (input === "PASSWORD") {
        await this.password.fill(valor);
      }
    });
  }

  async validarVisibilidadeBotaoLogin() {
    await test.step("VALIDAR VISIBILIDADE DO BOTÃO LOGIN", async () => {
      await expect(this.page.locator('[data-test="login-button"]')).toBeVisible()
    })
  }

  async validarHabilitaçãoBotaoLogin() {
    await test.step("VALIDAR SE O BOTÃO DE LOGIN ESTÁ HABILITADO", async () => {
      await expect(this.page.locator('[data-test="login-button"]')).toBeEnabled();
    })
  }

  async clicarBotaoLogin() {
    await test.step("CLICAR NO BOTÃO DE LOGIN", async () => {
      await this.page.locator('[data-test="login-button"]').click();
    })
  }

  async validarLoginSucesso() {
    await test.step("VALIDAR LOGIN COM SUCESSO", async () => {
      await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");;
    })
  }

  async validarLoginFalhou() {
    await test.step("ENTÃO VALIDO LOGIN FALHOU", async () => {
      await expect(this.page.locator('[data-test="error"]')).toBeVisible();
      await expect(this.page).toHaveURL("https://www.saucedemo.com/");
    })
  }
}

export default LoginPage;
