// Styles

import "./headerSpecificationView.scss";

// Scripts

import View from "../../../../view";
import HeaderSpecificationButtonView from "./headerSpecificationButton/headerSpecificationButtonView";
import HeaderSpecificationModalWindowView from "./headerSpecificationModalWindow/headerSpecificationModalWindowView";
import HeaderSpecificationModalContentView from "./headerSpecificationModalContent/headerSpecificationModalContentView";

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

  headerSpecificationButtonView: HTMLElement | null = null;
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

    this.headerSpecificationButtonView =
      headerSpecificationButtonView.getHtmlElement();
  }

  #createHeaderSpecificationModalWindow(): void {
    const headerSpecificationModalWindow =
      new HeaderSpecificationModalWindowView();

    this.headerSpecificationModalWindow =
      headerSpecificationModalWindow.getHtmlElement();
  }

  #configureView(): void {
    this.#headerSpecificationView?.append(
      this.headerSpecificationButtonView!,
      this.headerSpecificationModalWindow!
    );
    this.viewElementCreator?.addInnerElement(this.#headerSpecificationView!);
  }

  #bindListeners(): void {
    this.headerSpecificationButtonView?.addEventListener(
      "click",
      this.#createHeaderModalWindowContent.bind(this)
    );
  }

  #createHeaderModalWindowContent() {
    const headerSpecificationModalContentView =
      new HeaderSpecificationModalContentView(
        this.headerSpecificationModalWindow!
      );
  }
}
