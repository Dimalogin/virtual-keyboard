// Styles

import "./virtualKeyboardBodyView.scss";

// Scripts

import View from "../../../../view";
import VirtualKeyboardTextareaView from "./virtualKeyboardTextarea/virtualKeyboardTextareaView";
import VirtualKeyboardPanelView from "./virtualKeyboardPanel/virtualKeyboardPanelView";

// Types

import { ElementParams } from "../../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  keyboardVirtualBody: "keyboard-virtual__body",
};

export default class VirtualKeyboardBodyView extends View {
  #virtualKeyboardBodyView: DocumentFragment | null =
    document.createDocumentFragment();

  virtualKeyboardTextareaElement: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.keyboardVirtualBody],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createVirtualTextareaView();
    this.#createVirtualKeyboardPanelView();
    this.#configureView();
  }

  #createVirtualTextareaView(): void {
    const virtualKeyboardTextareaView = new VirtualKeyboardTextareaView();

    this.virtualKeyboardTextareaElement =
      virtualKeyboardTextareaView.getHtmlElement();

    this.#virtualKeyboardBodyView?.appendChild(
      virtualKeyboardTextareaView.getHtmlElement()
    );
  }

  #createVirtualKeyboardPanelView() {
    const virtualKeyboardPanelView = new VirtualKeyboardPanelView();

    this.#virtualKeyboardBodyView?.appendChild(
      virtualKeyboardPanelView.getHtmlElement()
    );
  }

  #configureView(): void {
    this.viewElementCreator?.addInnerElement(this.#virtualKeyboardBodyView!);
  }
}
