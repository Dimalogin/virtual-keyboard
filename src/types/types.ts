export type AttributesParams = Array<Array<string>>;

export type ElementParams = {
  tag: string;
  classNames: Array<string>;
  textContent: string;
  callback: null | Function;
  attributes: Array<Array<string>>;
  identificators: Array<string>;
  dataAttributes: Array<Array<string>>;
};

export type ViewParams = {
  tag: string;
  classNames: Array<string>;
};

export type ContainerParams = {
  CONTAINER: string;
};

export type VirtualKeyboardProperties = {
  textareaValue: string;
  keyboardLanguage: string;
  keyboardCapslock: boolean;
};

export type SpeechSynthesisProperties = {
  utterance: SpeechSynthesisUtterance;
  synthesis: SpeechSynthesis;
  speech: boolean;
  voiceRu: SpeechSynthesisVoice | null;
  voiceEn: SpeechSynthesisVoice | null;
  buttonSound: HTMLButtonElement | null;
  iconButtonSound: HTMLElement | null;
  currentLanguage: string | null;
  currentTextareaValue: string | null;
};
