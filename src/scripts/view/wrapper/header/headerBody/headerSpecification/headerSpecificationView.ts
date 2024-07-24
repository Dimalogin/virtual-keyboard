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

  headerSpecificationButtonView: HeaderSpecificationButtonView | null = null;

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
    this.#createHeaderSpecificationModalWindowView();
    this.#configureView();
  }

  #createHeaderSpecificationButtonView(): void {
    const headerSpecificationButtonView = new HeaderSpecificationButtonView();
    this.headerSpecificationButtonView = headerSpecificationButtonView;

    this.#headerSpecificationView?.appendChild(
      headerSpecificationButtonView.getHtmlElement()
    );
  }

  #createHeaderSpecificationModalWindowView(): void {
    const headerSpecificationModalWindowView =
      new HeaderSpecificationModalWindowView(
        this.headerSpecificationButtonView!
      );

    this.#headerSpecificationView?.appendChild(
      headerSpecificationModalWindowView.getHtmlElement()
    );
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#headerSpecificationView!);
  }
}
