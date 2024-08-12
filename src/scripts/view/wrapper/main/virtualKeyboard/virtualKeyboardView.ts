// Styles

import "./virtualKeyboardView.scss";

// Scripts

import View from "../../../view";
import VirtualKeyboardBodyView from "./virtualKeyboardBody/virtualKeyboardBodyView";

// Types

import { ElementParams } from "../../../../../types/types";

// Parameters

const tag = {
  TAG: "section",
};

const cssClasses = {
  virtualKeyboard: "main__virtual-keyboard",
  keyboardVirtual: "keyboard-virtual",
};

export default class VirtualKeyboardView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.virtualKeyboard, cssClasses.keyboardVirtual],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#configureView();
  }

  #configureView() {
    const virtualKeyboardBodyView = new VirtualKeyboardBodyView();

    this.viewElementCreator?.addInnerElement(
      virtualKeyboardBodyView.getHtmlElement()
    );
  }
}
