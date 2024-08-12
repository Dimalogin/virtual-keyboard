// Styles

import "./headerLogoView.scss";

// Scripts
import View from "../../../../view";
import HeaderLogoIconView from "./headerLogoIcon/headerLogoIconView";
import HeaderLogoTitleView from "./headerLogoTitle/headerLogoTitleView";

// Types

import { ElementParams } from "../../../../../../types/types";

// Parameters

const tag = {
  A: "a",
};

const cssClasses = {
  headerLogo: "header__logo",
  logoHeader: "logo-header",
};

const cssAttributes = {
  HREF: ["href", "https://dimalogin.github.io/virtual-keyboard/"],
};

export default class HeaderLogoView extends View {
  #headerLogoView: DocumentFragment | null = document.createDocumentFragment();

  constructor() {
    const params: ElementParams = {
      tag: tag.A,
      classNames: [cssClasses.headerLogo, cssClasses.logoHeader],
      textContent: "",
      callback: null,
      attributes: [cssAttributes.HREF],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createHeaderLogoIconView();
    this.#createHeaderLogoTitleView();
    this.#configureView();
  }

  #createHeaderLogoIconView(): void {
    const headerLogoIconView = new HeaderLogoIconView();
    this.#headerLogoView?.appendChild(headerLogoIconView.getHtmlElement());
  }

  #createHeaderLogoTitleView(): void {
    const headerLogoTitleView = new HeaderLogoTitleView();
    this.#headerLogoView?.appendChild(headerLogoTitleView.getHtmlElement());
  }

  #configureView(): void {
    this.viewElementCreator?.addInnerElement(this.#headerLogoView!);
  }
}
