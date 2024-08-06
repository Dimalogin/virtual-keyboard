// Styles

import "./virtualKeyboardPanelView.scss";

// Scripts

import View from "../../../../../view";

// Types

import { ElementParams } from "../../../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  keyboardVirtualPanel: "keyboard-virtual__panel",
  panelKeyboardVirtual: "panel-keyboard-virtual",
};

export default class VirtualKeyboardPanelView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [
        cssClasses.keyboardVirtualPanel,
        cssClasses.panelKeyboardVirtual,
      ],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
