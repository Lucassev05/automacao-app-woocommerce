import productScreen from "../screens/product.screen.js";
import storeScreen from "../screens/store.screen.js";

describe("Produtos", () => {
  it("Cadastrar produto com sucesso", async () => {
    const userData = {
      url: "http://34.171.117.131/",
      username: "gerente",
      password: "GD*peToHNJ1#c$sgk08EaYJQ",
    };

    const product = {
      name: "Produto teste",
    };

    await storeScreen.loginAndGoToMainPage(userData);
    await storeScreen.goToProductScreen();
    await productScreen.addNewProduct(product.name);

    await expect(
      await $("id:com.woocommerce.android:id/snackbar_text")
    ).toHaveText("Product published");
  });
});
