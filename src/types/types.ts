//type AttributesParams = {};

export type ElementParams = {
  tag: string;
  classNames: Array<string>;
  textContent: string;
  callback: null | Function;
  attributes: Array<Array<string>>;
  identificators: Array<string>;
};

export type ViewParams = {
  tag: string;
  classNames: Array<string>;
};

export type ContainerParams = {
  CONTAINER: string;
};
