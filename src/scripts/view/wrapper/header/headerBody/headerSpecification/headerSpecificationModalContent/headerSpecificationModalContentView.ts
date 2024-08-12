// Styles

import "./headerSpecificationModalContentView.scss";

// Scripts

// Types

// Templates

import headerModalWindowContentTemplate from "../../../../../../../templates/headerModalWindowTemplate";

// Parameters

export default class HeaderSpecificationModalContentView {
  #modalWindowElement: HTMLElement | null = null;
  #modalWindowContentTemplateFullView: DocumentFragment | null = null;
  #modalWindowButtonClose: HTMLElement | null = null;

  constructor(modalWindowElement: HTMLElement) {
    this.#modalWindowElement = modalWindowElement;

    this.#initTemplate();
    this.#openModalWindow(modalWindowElement);
    this.#bindListeners();
  }

  #initTemplate() {
    this.#modalWindowContentTemplateFullView =
      headerModalWindowContentTemplate.content.cloneNode(
        true
      ) as DocumentFragment;

    this.#modalWindowButtonClose =
      this.#modalWindowContentTemplateFullView.querySelector(
        ".modal-content-specification__button-close"
      );
  }

  #bindListeners() {
    this.#modalWindowButtonClose?.addEventListener(
      "click",
      this.#closeModalWindow.bind(this)
    );
  }

  #openModalWindow(modalWindowElement: HTMLElement) {
    if (!modalWindowElement.childNodes.length) {
      modalWindowElement.appendChild(this.#modalWindowContentTemplateFullView!);
    }
  }

  #closeModalWindow() {
    this.#modalWindowElement!.innerHTML = "";
  }
}
