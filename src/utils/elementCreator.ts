// Types

import { ElementParams } from "../types/types";

export default class ElementCreator {
  #element: HTMLElement | null = null;

  constructor(params: ElementParams) {
    this.#createElement(params);
  }

  #createElement(params: ElementParams): void {
    this.#element = document.createElement(params.tag);

    this.#setCssClasses(params.classNames);
    this.#setTextContent(params.textContent);
    this.#setCallback(params.callback);
    this.#setAtrributes(params.attributes);
    this.#setDataAttributes(params.dataAttributes);
  }

  #setCssClasses(cssClasses: Array<string>): void {
    cssClasses.map((cssClass) => this.#element?.classList.add(cssClass));
  }

  #setTextContent(text: string): void {
    this.#element!.textContent = text;
  }

  #setCallback(callback: Function | null): void {
    if (typeof callback === "function") {
      this.#element?.addEventListener("click", (event) => callback(event));
    }
  }

  #setAtrributes(attributes: Array<Array<string>>): void {
    attributes.map((attribute) => {
      const [name, value] = attribute;
      this.#element!.setAttribute(name, value);
    });
  }

  #setDataAttributes(dataAttributes: Array<Array<string>>) {
    dataAttributes.map((dataAttribute) => {
      const [dataName, dataValue] = dataAttribute;
      this.#element!.dataset[dataName] = dataValue;
    });
  }

  getElement(): HTMLElement {
    return this.#element!;
  }

  addInnerElement(element: HTMLElement | ElementCreator | DocumentFragment) {
    if (element instanceof ElementCreator) {
      this.#element?.append(element.getElement());
    } else {
      this.#element?.append(element);
    }
  }
}
