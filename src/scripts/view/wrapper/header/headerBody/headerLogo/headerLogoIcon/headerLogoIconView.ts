// Styles

import "./headerLogoIconView.scss";

// Scripts

import View from "../../../../../view";
import HeaderLogoImageView from "./headerLogoImage/headerLogoImageView";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Paramters

const tag = {
  TAG: "span",
};

const cssClasses = {
  logoHeaderIcon: "logo-header__icon",
};

export default class HeaderLogoIconView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.logoHeaderIcon],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#createHeaderLogoImageView();
  }

  #createHeaderLogoImageView(): void {
    const headerLogoImageView = new HeaderLogoImageView();

    this.viewElementCreator?.addInnerElement(
      headerLogoImageView.getHtmlElement()
    );
  }
}
