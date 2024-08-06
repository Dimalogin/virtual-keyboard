// Styles

import "./footerIconView.scss";

// Scripts

import View from "../../../../view";

import FooterImageView from "./footerImage/footerImageView";

// Types

import { ElementParams } from "../../../../../../types/types";

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  footerIcon: "footer__icon",
};

const cssAttributes = {
  HREF: ["href", "#"],
};

export default class FooterIconView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.footerIcon],
      textContent: "",
      callback: null,
      attributes: [cssAttributes.HREF],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createFooterImageView();
  }

  #createFooterImageView() {
    const footerImageView = new FooterImageView();
    this.viewElementCreator?.addInnerElement(footerImageView.getHtmlElement());
  }
}
