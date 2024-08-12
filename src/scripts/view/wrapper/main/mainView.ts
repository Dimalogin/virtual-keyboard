// Styles

import "./mainView.scss";

// Scripts

import View from "../../view";
import ContainerView from "../container/contanerView";
import VirtualKeyboardView from "./virtualKeyboard/virtualKeyboardView";

// Types

import { ElementParams } from "../../../../types/types";

// Parameters

const tag = {
  TAG: "main",
};

const cssClasses = {
  MAIN: "main",
};

export default class MainView extends View {
  #containerView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.MAIN],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#createContainerView();
    this.#createVirtualKeyboardView();
    this.#configureView();
  }

  #createContainerView(): void {
    const mainContainerParams = {
      CONTAINER: "main",
    };

    const containerView = new ContainerView(mainContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  #createVirtualKeyboardView(): void {
    const virtualKeyboardView = new VirtualKeyboardView();
    this.#containerView?.appendChild(virtualKeyboardView.getHtmlElement());
  }

  #configureView(): void {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
