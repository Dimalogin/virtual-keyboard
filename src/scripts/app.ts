// Scripts

import WrapperView from "./view/wrapper/wrapperView";

export default class App {
  constructor() {
    this.#createView();
  }

  #createView(): void {
    const wrapper = new WrapperView();

    document.body.append(wrapper.getHtmlElement());
  }
}
