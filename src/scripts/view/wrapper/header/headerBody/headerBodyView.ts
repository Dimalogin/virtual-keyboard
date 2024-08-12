// Styles

import "./headerBodyView.scss";

// Scripts

import View from "../../../view";
import HeaderLogoView from "./headerLogo/headerLogoView";
import HeaderSpecificationView from "./headerSpecification/headerSpecificationView";

// Types

import { ElementParams } from "../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  headerBody: "header__body",
};

export default class HeaderBodyView extends View {
  #headerBodyView: DocumentFragment | null = document.createDocumentFragment();

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerBody],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#createHeaderLogoView();
    this.#createHeaderSpecificationView();
    this.#configureView();
  }

  #createHeaderLogoView(): void {
    const headerLogoView = new HeaderLogoView();
    this.#headerBodyView?.appendChild(headerLogoView.getHtmlElement());
  }

  #createHeaderSpecificationView() {
    const headerSpecificationView = new HeaderSpecificationView();
    this.#headerBodyView?.appendChild(headerSpecificationView.getHtmlElement());
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#headerBodyView!);
  }
}
