import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login-page";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.USER || "";
const PASSWORD = process.env.PASSWORD || "";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.irParaSauceDemo();
});

test.describe("SL Testar Login da Sauce Demo", () => {
  test("SL1 - Validar funcionamento do input Username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await loginPage.validarPagina();
    });
    await test.step("E EU VER O INPUT USERNAME", async () => {
      await loginPage.validarVisibilidadeInput("USERNAME");
    });
    await test.step("E o input estar habilitado", async () => {
      await loginPage.validarHabilitacaoInput("USERNAME");
    });
    await test.step("então devo conseguir escrever standard_user", async () => {
      await loginPage.preencherInput("USERNAME", USERNAME);
    });
  });

  test("SL2 - Validar funcionamento do Input Password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await loginPage.validarPagina();
    });
    await test.step("E EU VER O INPUT PASSWORD", async () => {
      await await loginPage.validarVisibilidadeInput("PASSWORD");
    });
    await test.step("E o input estar habilitado", async () => {
      await loginPage.validarHabilitacaoInput("PASSWORD");
    });
    await test.step("então devo conseguir escrever secret_sauce", async () => {
      await loginPage.preencherInput("PASSWORD", PASSWORD);
    });
  });

  test("SL3 - Validar funcionamento do Botão Login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await loginPage.validarPagina();
    });
    await test.step("E EU VER O BOTÃO LOGIN", async () => {
      await loginPage.validarVisibilidadeBotaoLogin()
    });
    await test.step("ENTÃO O BOTÃO DEVE ESTAR HABILITADO", async () => {
      await loginPage.validarHabilitaçãoBotaoLogin()
    });
  });

  test("SL4 - Validar Login com sucesso", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await loginPage.validarPagina();
    });
    await test.step("E EU PRENCHER INPUT USERNAME", async () => {
      await loginPage.preencherInput("USERNAME",USERNAME)
    });
    await test.step("E EU PRENCHER INPUT PASSWORD", async () => {
      await loginPage.preencherInput("PASSWORD",PASSWORD)
    });
    await test.step("E EU CLICAR NO BOTÃO DE LOGIN", async () => {
      await loginPage.clicarBotaoLogin()
    });
    await test.step("ENTÃO VALIDO LOGIN COM SUCESSO", async () => {
      await loginPage.validarLoginSucesso()
    });
  });

  test("SL5 - Validar lOGIN COM CREDENCIAIS ERRADAS", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("QUANDO A PAGINA JA ESTIVER CARREGADA", async () => {
      await loginPage.validarPagina();
    });
    await test.step("E EU PRENCHER INPUT USERNAME", async () => {
      await loginPage.preencherInput("USERNAME", "Goreth")
    });
    await test.step("E EU PRENCHER INPUT PASSWORD", async () => {
      await loginPage.preencherInput("PASSWORD", "Pires")
    });
    await test.step("E O BOTÃO DE LOGIN ESTAR HABILITADO", async () => {
      await loginPage.validarHabilitaçãoBotaoLogin();
    });
    await test.step("E EU CLICAR NO BOTÃO DE LOGIN", async () => {
      await loginPage.clicarBotaoLogin();
    });
    await test.step("ENTÃO VALIDO LOGIN FALHOU", async () => {
     await loginPage.validarLoginFalhou()
    });
  });
});

// POM - PAGE OBJECT MODEL

// coding like a profissional

// fixtures
