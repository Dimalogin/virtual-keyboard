// Styles

import View from "../../../../../view";

// Scripts

// Types

import { ElementParams } from "../../../../../../../types/types";
import { AttributesParams } from "../../../../../../../types/types";

// Parameters

const tag = {
  TAG: "img",
};

const cssAttributes = {
  SRC: ["src", "./images/logoRss.svg"],
  TITLE: ["title", "rsSchool"],
  ALT: ["alt", "logoRsSchool"],
};

export default class FooterImageView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [],
      textContent: "",
      callback: null,
      attributes: [cssAttributes.SRC, cssAttributes.ALT, cssAttributes.TITLE],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
