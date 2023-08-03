import homeScreen from "./home.screen.js";
import loginScreen from "./login.screen.js";

class StoreScreen {
  get #menuProducs() {
    return $("id:com.woocommerce.android:id/products");
  }

  async goToProductScreen() {
    await this.#menuProducs.click();
  }

  async loginAndGoToMainPage(userData) {
    await homeScreen.goToLoginPage();
    await loginScreen.setStoreAddress(userData.url);
    await loginScreen.clickContinueButton();
    await loginScreen.clickContinueWithCredentials();
    await loginScreen.login(userData.username, userData.password);
    await loginScreen.goToTwoFactorAuth();
    await loginScreen.goToTwoFactorLogin(userData.password);
  }
}

export default new StoreScreen();
