class ProductScreen {
  get #newProductBtn() {
    return $("~Add products");
  }

  get #addSimplePhisicalProduct() {
    return $('android=new UiSelector().text("Simple physical product")');
  }

  get #inputProductTitle() {
    return $("id:com.woocommerce.android:id/editText");
  }

  get #publishButton() {
    return $("id:com.woocommerce.android:id/menu_done");
  }

  async addNewProduct(productName) {
    await this.#newProductBtn.click();
    await this.#addSimplePhisicalProduct.click();
    await this.#inputProductTitle.setValue(productName);
    await this.#publishButton.click();
  }
}

export default new ProductScreen();
