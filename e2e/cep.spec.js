import { test, expect } from "@playwright/test";

test.describe("Teste da aplicação de CEP", () => {
  test("Deve buscar e exibir os dados do CEP", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const cepInput = page.locator("#cep");
    await expect(cepInput).toBeVisible();

    await cepInput.fill("01001000");
    await page.click("button[type='submit']");

    const bairroInput = page.locator("#bairro");
    const cidadeInput = page.locator("#cidade");
    const ruaInput = page.locator("#rua");

    await expect(bairroInput).toHaveValue("Sé");
    await expect(cidadeInput).toHaveValue("São Paulo");
    await expect(ruaInput).toHaveValue("Praça da Sé");
  });

  test("Deve utilizar o cache para CEPs já buscados", async ({ page }) => {
    await page.goto("http://localhost:5173");
    const cepInput = page.locator("#cep");
    await cepInput.fill("01001000");
    await page.click("button[type='submit']");

    const bairroInput = page.locator("#bairro");
    await expect(bairroInput).toHaveValue("Sé");
  });
  test("Deve medir o tempo para cache e API", async ({ page }) => {
    const logs = [];

    page.on("console", (msg) => {
      if (msg.type() === "log") {
        logs.push(msg.text());
        console.log(`[Console log capturado]: ${msg.text()}`);
      }
    });

    await page.goto("http://localhost:5173");

    await page.locator("#cep").fill("01001000");
    await page.click("button[type='submit']");
    await page.waitForTimeout(1000);

    await page.locator("#cep").fill("01001000");
    await page.click("button[type='submit']");
    await page.waitForTimeout(1000);

    console.log("Todos os logs capturados:", logs);

    const cacheLog = logs.find((log) => log.includes("cache"));
    const apiLog = logs.find((log) => log.includes("api"));

    expect(apiLog).toBeDefined();
    expect(cacheLog).toBeDefined();
  });

});
