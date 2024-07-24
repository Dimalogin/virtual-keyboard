// Styles

import "./mainView.scss";

// Scripts

import View from "../../view";
import ContainerView from "../container/contanerView";

// Types

import { ElementParams } from "../../../../types/types";

// Parameters

const tag = {
  TAG: "main",
};

const cssClasses = {
  HEADER: "main",
};

export default class MainView extends View {
  #containerView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.HEADER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);
    this.#createContainerView();
    this.#configureView();
  }

  #createContainerView(): void {
    const mainContainerParams = {
      CONTAINER: "main",
    };

    const containerView = new ContainerView(mainContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
