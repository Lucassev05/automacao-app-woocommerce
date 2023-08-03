class StartScreen {
  get #skipButton() {
    return $("id:com.woocommerce.android:id/button_skip");
  }

  async goToHomePage() {
    await this.#skipButton.click();
  }
}

export default new StartScreen();
