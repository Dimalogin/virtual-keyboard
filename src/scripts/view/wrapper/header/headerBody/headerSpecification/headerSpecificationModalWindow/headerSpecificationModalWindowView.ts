// Styles

import "./headerSpecificationModalWindowView.scss";

// Scripts

import View from "../../../../../view";

// Templates

import headerModalWindowTemplate from "../../../../../../../templates/headerModalWindowTemplate";

// Types

import { ElementParams } from "../../../../../../../types/types";
import HeaderSpecificationButtonView from "../headerSpecificationButton/headerSpecificationButtonView";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  specificationHeaderModalWindow: "specification-header__modal-window",
};

export default class HeaderSpecificationModalWindowView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.specificationHeaderModalWindow],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);
  }
}
