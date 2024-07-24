// Styles

import "./headerSpecificationView.scss";

// Scripts

import View from "../../../../view";
import HeaderSpecificationButtonView from "./headerSpecificationButton/headerSpecificationButtonView";
import HeaderSpecificationModalWindowView from "./headerSpecificationModalWindow/headerSpecificationModalWindowView";

// Types

import { ElementParams } from "../../../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  headerSpecification: "header__specification",
  specificationHeader: "specification-header",
};

export default class HeaderSpecificationView extends View {
  #headerSpecificationView: DocumentFragment | null =
    document.createDocumentFragment();

  headerSpecificationButton: HTMLElement | null = null;
  headerSpecificationModalWindow: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [
        cssClasses.headerSpecification,
        cssClasses.specificationHeader,
      ],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);

    this.#createHeaderSpecificationButtonView();
    this.#createHeaderSpecificationModalWindow();

    this.#configureView();

    this.#bindListeners();
  }

  #createHeaderSpecificationButtonView(): void {
    const headerSpecificationButtonView = new HeaderSpecificationButtonView();
    this.headerSpecificationButton =
      headerSpecificationButtonView.getHtmlElement();
  }

  #createHeaderSpecificationModalWindow() {
    const headerSpecificationModalWindow =
      new HeaderSpecificationModalWindowView();

    this.headerSpecificationModalWindow =
      headerSpecificationModalWindow.getHtmlElement();
  }

  #bindListeners(): void {
    this.headerSpecificationButton?.addEventListener(
      "click",
      this.#openModalWindow.bind(this)
    );
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#headerSpecificationView!);
  }

  #openModalWindow(): void {
    console.log("open");
    /*
    const headerSpecificationModalWindowView =
      new HeaderSpecificationModalWindowView();
      */
  }

  #initSpecificationModalWindowTemplate(): void {}
}
