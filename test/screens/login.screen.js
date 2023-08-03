class LoginScreen {
  get #inputText() {
    return $("id:com.woocommerce.android:id/input");
  }

  get #continueButton() {
    return $("id:com.woocommerce.android:id/bottom_button");
  }

  get #continueWithCredentials() {
    return $("id:com.woocommerce.android:id/login_site_creds");
  }

  get #passwordInput() {
    return $('android=new UiSelector().text("Password")');
  }

  get #twoFactorPasswordBtn() {
    return $("id:com.woocommerce.android:id/login_enter_password");
  }

  async setStoreAddress(url) {
    await this.#inputText.setValue(url);
  }

  async clickContinueButton() {
    await this.#continueButton.click();
  }

  async clickContinueWithCredentials() {
    await this.#continueWithCredentials.click();
  }

  async login(username, password) {
    await this.#inputText.setValue(username);
    await this.#passwordInput.setValue(password);
    await this.#continueButton.click();
  }

  async goToTwoFactorAuth() {
    await this.#twoFactorPasswordBtn.click();
  }

  async goToTwoFactorLogin(password) {
    await this.#inputText.setValue(password);
    await this.#continueButton.click();
  }
}

export default new LoginScreen();
