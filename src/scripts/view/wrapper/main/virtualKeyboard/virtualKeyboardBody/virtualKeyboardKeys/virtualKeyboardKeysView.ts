// Styles

import "./virtualKeyboardKeysView.scss";

// Scripts

import View from "../../../../../view";
import CreateKeys from "./createKeys/createKeys";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Parameters

export default class VirtualKeyboardKeysView {
  keyboardVirtualScreenView: HTMLElement | null = null;
  virtualKeyboardPanelView: HTMLElement | null = null;

  virtualKeyboardKeysView: HTMLElement | null = null;

  constructor(
    keyboardVirtualScreenView: HTMLElement,
    virtualKeyboardPanelView: HTMLElement
  ) {
    this.keyboardVirtualScreenView = keyboardVirtualScreenView;
    this.virtualKeyboardPanelView = virtualKeyboardPanelView;

    this.#createVirtualKeyboardKeysView();
    this.#createKeys();
  }

  #createVirtualKeyboardKeysView() {
    this.virtualKeyboardKeysView = this.virtualKeyboardPanelView?.querySelector(
      ".panel-keyboard-virtual__keys"
    ) as HTMLElement;
  }

  #createKeys() {
    const createKeys = new CreateKeys(
      this.virtualKeyboardKeysView,
      this.keyboardVirtualScreenView
    );
  }
}
