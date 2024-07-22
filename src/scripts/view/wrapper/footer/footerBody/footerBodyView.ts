// Styles

import "./footerBodyView.scss";

// Scripts

import View from "../../../view";

// Types

import { ElementParams } from "../../../../../types/types";
import FooterLinkView from "./footerLink/footerLinkView";
import FooterDateView from "./footerDate/footerDateView";
import FooterIconView from "./footerIcon/footerIconView";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  footerBody: "footer__body",
};

export default class FooterBodyView extends View {
  #footerBodyView: DocumentFragment | null = document.createDocumentFragment();

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.footerBody],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);
    this.#createFooterLinkView();
    this.#createFooterDateView();
    this.#createFooterIconView();
    this.#configureView();
  }

  #createFooterLinkView() {
    const footerLinkView = new FooterLinkView();
    this.#footerBodyView?.appendChild(footerLinkView.getHtmlElement());
  }

  #createFooterDateView() {
    const footerDateView = new FooterDateView();
    this.#footerBodyView?.appendChild(footerDateView.getHtmlElement());
  }

  #createFooterIconView() {
    const footerIconView = new FooterIconView();
    this.#footerBodyView?.appendChild(footerIconView.getHtmlElement());
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#footerBodyView!);
  }
}
