// Styles

import "./headerSpecificationButtonView.scss";

// Scripts

import View from "../../../../../view";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Parameters

const tag = {
  TAG: "button",
};

const cssClasses = {
  specificationHeaderButton: "specification-header__button",
};

const cssAttributes = {
  TYPE: ["type", "button"],
};

export default class HeaderSpecificationButtonView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.specificationHeaderButton],
      textContent: "specification",
      callback: null,
      attributes: [cssAttributes.TYPE],
      identificators: [],
    };

    super(params);
  }
}
