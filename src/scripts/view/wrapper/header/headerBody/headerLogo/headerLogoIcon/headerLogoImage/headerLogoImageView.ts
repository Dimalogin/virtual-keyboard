// Styles

import "./headerLogoImageView.scss";

// Scripts

import View from "../../../../../../view";

// Types

import { ElementParams } from "../../../../../../../../types/types";

// Paramters

const tag = {
  TAG: "img",
};

const cssAttributes = {
  SRC: ["src", "./images/keyboard.png"],
  ALT: ["alt", "keyboard"],
  TITLE: ["title", "logo"],
};

export default class HeaderLogoImageView extends View {
  // #headerLogoImageView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [],
      textContent: "",
      callback: null,
      attributes: [cssAttributes.SRC, cssAttributes.ALT, cssAttributes.TITLE],
      identificators: [],
    };

    super(params);

    this.#setImage();
  }
  #setImage() {}
}
