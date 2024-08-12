// Styles

import "./virtualKeyboardBodyView.scss";

// Scripts

import View from "../../../../view";

import VirtualKeyboardKeysView from "./virtualKeyboardKeys/virtualKeyboardKeysView";

// Types

import { ElementParams } from "../../../../../../types/types";

// Templates

import keyboardVirtualScreenTemplate from "../../../../../../templates/keyboardVirtualScreenTemplate";
import keyboardVirtualPanelTemplate from "../../../../../../templates/virtualKeyboardPanelTemplate";

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

  #virtualKeyboardPanelTemplate: DocumentFragment | null =
    document.createDocumentFragment();
  #virtualKeyboardPanelView: HTMLElement | null = null;

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

    this.#initKeyboardVirtualPanelTemplate();
    this.#getKeyboardVirtualPanelView();
    this.#createVirtualKeyboardPanelView();

    this.#configureView();

    this.#createPanelKeyboardVirtualKeysView();
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

  #initKeyboardVirtualPanelTemplate() {
    this.#virtualKeyboardPanelTemplate =
      keyboardVirtualPanelTemplate.content.cloneNode(true) as DocumentFragment;
  }

  #getKeyboardVirtualPanelView() {
    this.#virtualKeyboardPanelView =
      this.#virtualKeyboardPanelTemplate?.querySelector(
        ".keyboard-virtual__panel"
      ) as HTMLElement;
  }

  #createVirtualKeyboardPanelView() {
    this.#virtualKeyboardBodyView?.appendChild(this.#virtualKeyboardPanelView!);
  }

  #configureView(): void {
    this.viewElementCreator?.addInnerElement(this.#virtualKeyboardBodyView!);
  }

  #createPanelKeyboardVirtualKeysView() {
    const panelKeyboardVirtualKeys = new VirtualKeyboardKeysView(
      this.#keyboardVirtualScreenView!,
      this.#virtualKeyboardPanelView!
    );
  }
}
