// Styles

import "./wrapperView.scss";

// Scripts

import View from "../view";
import HeaderView from "./header/headerView";
import MainView from "./main/mainView";
import FooterView from "./footer/footerView";

// Types

import { ElementParams } from "../../../types/types";

// Parameters

const tag = {
  DIV: "div",
};

const cssClasses = {
  WRAPPER: "wrapper",
};

export default class WrapperView extends View {
  #wrapperView: DocumentFragment | null = document.createDocumentFragment();

  constructor() {
    const params: ElementParams = {
      tag: tag.DIV,
      classNames: [cssClasses.WRAPPER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#createHeaderView();
    this.#createMainView();
    this.#createFooterView();
    this.#configureView();
  }

  #createHeaderView(): void {
    const headerView = new HeaderView();
    this.#wrapperView?.appendChild(headerView.getHtmlElement());
  }

  #createMainView(): void {
    const mainView = new MainView();
    this.#wrapperView?.appendChild(mainView.getHtmlElement());
  }

  #createFooterView() {
    const footerView = new FooterView();
    this.#wrapperView?.appendChild(footerView.getHtmlElement());
  }

  #configureView(): void {
    this.viewElementCreator?.addInnerElement(this.#wrapperView!);
  }
}
