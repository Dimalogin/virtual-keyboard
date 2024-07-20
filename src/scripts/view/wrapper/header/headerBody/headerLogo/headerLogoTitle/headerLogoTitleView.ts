// Styles

import "./headerLogoTitleView.scss";

// Scripts

import View from "../../../../../view";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Paramters

const tag = {
  TAG: "span",
};

const cssClasses = {
  logoHeaderTitle: "logo-header__title",
};

export default class HeaderLogoTitleView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.logoHeaderTitle],
      textContent: "Keyboard",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);
  }
}
