// Styles

import "./footerLinkView.scss";

// Scripts

import View from "../../../../view";

// Types

import { ElementParams } from "../../../../../../types/types";

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  footerLink: "footer__link",
};

const cssAttributes = {
  HREF: ["href", "#"],
};

export default class FooterLinkView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.footerLink],
      textContent: "GitHub",
      callback: null,
      attributes: [cssAttributes.HREF],
      identificators: [],
    };

    super(params);
  }
}
