class HomeScreen {
  get #loginButton() {
    return $("id:com.woocommerce.android:id/button_login_store");
  }

  async goToLoginPage() {
    await this.#loginButton.click();
  }
}

export default new HomeScreen();
