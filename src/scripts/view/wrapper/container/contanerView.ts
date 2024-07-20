// Styles

import "./containerView.scss";

// Scripts

import View from "../../view";

// Types

import { ContainerParams, ElementParams } from "../../../../types/types";
import { ViewParams } from "../../../../types/types";

// Parameters

const tag = {
  DIV: "div",
};
const cssClasses = {
  CONTAINER: "container",
};

export default class ContainerView extends View {
  constructor(param: ContainerParams) {
    const fullName = `${param.CONTAINER}-${cssClasses.CONTAINER}`;

    const params: ElementParams = {
      tag: tag.DIV,
      classNames: [fullName, cssClasses.CONTAINER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
    };

    super(params);
  }
}
