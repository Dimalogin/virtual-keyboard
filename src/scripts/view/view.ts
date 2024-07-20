// Scripts

import ElementCreator from "../../utils/elementCreator";

// Types

import { ViewParams } from "../../types/types";
import { ElementParams } from "../../types/types";

export default class View {
  viewElementCreator: ElementCreator | null = null;

  constructor(params: ElementParams) {
    this.viewElementCreator = this.#createView(params);
  }

  #createView(params: ElementParams): ElementCreator {
    const elementParams: ElementParams = {
      tag: params.tag,
      classNames: params.classNames,
      textContent: params.textContent,
      callback: params.callback,
      attributes: params.attributes,
      identificators: params.identificators,
    };

    this.viewElementCreator = new ElementCreator(elementParams);

    return this.viewElementCreator;
  }

  getHtmlElement(): HTMLElement {
    return this.viewElementCreator!.getElement();
  }
}
