// Styles

import "./virtualKeyboardKeysView.scss";

// Scripts

import View from "../../../../../view";
import CreateKeys from "./createKeys/createKeys";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  virtualKeyboardKeys: "virtual-keyboard__keys",
};

export default class VirtualKeyboardKeysView extends View {
  virtualKeyboardKeysView: HTMLElement | null = null;
  keyboardVirtualScreenView: HTMLElement | null = null;

  constructor(keyboardVirtualScreenView: HTMLElement) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.virtualKeyboardKeys],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.keyboardVirtualScreenView = keyboardVirtualScreenView;

    this.#createVirtualKeyboardKeysView();
    this.#createKeys();
  }

  #createVirtualKeyboardKeysView() {
    this.virtualKeyboardKeysView = this.viewElementCreator?.getElement()!;
  }

  #createKeys() {
    const createKeys = new CreateKeys(
      this.virtualKeyboardKeysView,
      this.keyboardVirtualScreenView
    );
  }
}
