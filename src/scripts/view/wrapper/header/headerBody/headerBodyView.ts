// Styles

import "./headerBodyView.scss";

// Scripts

import View from "../../../view";
import HeaderLogoView from "./headerLogo/headerLogoView";

// Types

import { ElementParams, ViewParams } from "../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  headerBody: "header__body",
};

export default class HeaderBodyView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerBody],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);
    this.#createHeaderLogoView();
  }

  #createHeaderLogoView(): void {
    const headerLogoView = new HeaderLogoView();

    this.viewElementCreator?.addInnerElement(headerLogoView.getHtmlElement());
  }
}
