// Styles

import "./footerDateView.scss";

// Scripts

import View from "../../../../view";

// Types

import { ElementParams } from "../../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  footerDate: "footer__date",
};

export default class FooterDateView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.footerDate],
      textContent: "2024",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
