// Styles

import "./virtualKeyboardBodyView.scss";

// Scripts

import View from "../../../../view";

import VirtualKeyboardKeysView from "./virtualKeyboardKeys/virtualKeyboardKeysView";

// Types

import { ElementParams } from "../../../../../../types/types";

// Templates

import keyboardVirtualScreenTemplate from "../../../../../../templates/keyboardVirtualScreenTemplate";

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

  #keyboardVirtualScreenTemplate: DocumentFragment | null = null;
  #keyboardVirtualScreenView: HTMLElement | null = null;

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

    this.#initKeyboardVirtualScreenTemplate();
    this.#getKeyboardVirtualScreenView();
    this.#createKeyboardVirtualScreenView();

    this.#createVirtualKeyboardPanelView();
    this.#configureView();
  }

  #initKeyboardVirtualScreenTemplate() {
    this.#keyboardVirtualScreenTemplate =
      keyboardVirtualScreenTemplate.content.cloneNode(true) as DocumentFragment;
  }

  #getKeyboardVirtualScreenView() {
    this.#keyboardVirtualScreenView =
      this.#keyboardVirtualScreenTemplate?.querySelector(
        ".keyboard-virtual__screen"
      ) as HTMLElement;
  }

  #createKeyboardVirtualScreenView() {
    this.#virtualKeyboardBodyView?.appendChild(
      this.#keyboardVirtualScreenView!
    );
  }

  #createVirtualKeyboardPanelView() {
    const virtualKeyboardKeysView = new VirtualKeyboardKeysView(
      this.#keyboardVirtualScreenView!
    );

    this.#virtualKeyboardBodyView?.appendChild(
      virtualKeyboardKeysView.getHtmlElement()
    );
  }

  #configureView(): void {
    this.viewElementCreator?.addInnerElement(this.#virtualKeyboardBodyView!);
  }
}
