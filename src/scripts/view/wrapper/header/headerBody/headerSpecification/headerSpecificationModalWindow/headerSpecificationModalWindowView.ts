// Styles

import "./headerSpecificationModalWindowView.scss";

// Scripts

import View from "../../../../../view";

// Templates

import headerModalWindowTemplate from "../../../../../../../templates/headerModalWindowTemplate";

// Types

import { ElementParams } from "../../../../../../../types/types";
import HeaderSpecificationButtonView from "../headerSpecificationButton/headerSpecificationButtonView";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  specificationHeaderModalWindow: "specification-header__modal-window",
};

export default class HeaderSpecificationModalWindowView extends View {
  #templateModalContent: DocumentFragment | null = null;
  #modalContentCloseButton: HTMLElement | null = null;

  constructor(buttonParams: HeaderSpecificationButtonView) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.specificationHeaderModalWindow],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);

    this.#initSpecificationModalWindowTemplate();
    this.#bindListeners(buttonParams!);
  }

  #bindListeners(buttonParams: HeaderSpecificationButtonView): void {
    const buttonELement = buttonParams.getHtmlElement();
    buttonELement.addEventListener("click", this.#openModelWindow.bind(this));

    this.#modalContentCloseButton?.addEventListener(
      "click",
      this.#closeModelWindow.bind(this)
    );
  }

  #initSpecificationModalWindowTemplate(): void {
    this.#templateModalContent = headerModalWindowTemplate.content.cloneNode(
      true
    ) as DocumentFragment;

    this.#modalContentCloseButton = this.#templateModalContent.querySelector(
      ".modal-content-specification__button-close"
    ) as HTMLElement;
  }

  #openModelWindow(): void {
    console.log("open");
  }

  #closeModelWindow(): void {
    console.log("close");
  }
}
