// Styles

import "./footerView.scss";

// Scripts

import View from "../../view";
import ContainerView from "../container/contanerView";
import FooterBodyView from "./footerBody/footerBodyView";

// Types

import { ElementParams } from "../../../../types/types";

// Parameters

const tag = {
  TAG: "footer",
};

const cssClasses = {
  FOOTER: "footer",
};

export default class FooterView extends View {
  #containerView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.FOOTER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);

    this.#createContainerView();
    this.#createFooterBodyView();
    this.#configureView();
  }

  #createContainerView(): void {
    const footerContainerParams = {
      CONTAINER: "footer",
    };

    const containerView = new ContainerView(footerContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  #createFooterBodyView(): void {
    const footerBodyView = new FooterBodyView();
    this.#containerView?.appendChild(footerBodyView.getHtmlElement());
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
