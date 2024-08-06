// Styles

import "./virtualKeyboardTextareaView.scss";

// Scripts

import View from "../../../../../view";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Parameters

const tag = {
  TAG: "textarea",
};

const cssClasses = {
  keyboardVirtualTextarea: "keyboard-virtual__textarea",
};

export default class VirtualKeyboardTextareaView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.keyboardVirtualTextarea],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
