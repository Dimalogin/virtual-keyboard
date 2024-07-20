// Styles

import "./headerView.scss";

// Scripts

import View from "../../view";
import ContainerView from "../container/contanerView";
import HeaderBodyView from "./headerBody/headerBodyView";

// Types

import { ElementParams } from "../../../../types/types";
import { ViewParams } from "../../../../types/types";

// Parameters

const tag = {
  TAG: "header",
};

const cssClasses = {
  HEADER: "header",
};

export default class HeaderView extends View {
  //#headerElement: HTMLElement | null = null;

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
    this.#createHeaderBodyView();
    this.#configureView();
  }

  #createContainerView(): void {
    const headerContainerParams = {
      CONTAINER: "header",
    };

    const containerView = new ContainerView(headerContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  #createHeaderBodyView(): void {
    const headerBodyView = new HeaderBodyView();

    this.#containerView?.appendChild(headerBodyView.getHtmlElement());
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
