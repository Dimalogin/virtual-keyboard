// Styles

import "./speechSynthesisModel.scss";

// Scripts

// Types

import { SpeechSynthesisProperties } from "../../../../../../../../../types/types";

// Parameters

export default class SpeechSynthesisModel {
  speechSynthesisProperties: SpeechSynthesisProperties = {
    utterance: new SpeechSynthesisUtterance(),
    synthesis: window.speechSynthesis,
    speech: false,
    voiceRu: null,
    voiceEn: null,
    buttonSound: null,
    iconButtonSound: null,
    currentLanguage: null,
    currentTextareaValue: null,
  };

  constructor() {
    this.#bindListeners();
  }

  #bindListeners() {
    this.speechSynthesisProperties.synthesis.addEventListener(
      "voiceschanged",
      this.#initSpeechSynthesis.bind(this)
    );

    this.speechSynthesisProperties.utterance.addEventListener(
      "start",
      this.#soundStart.bind(this)
    );

    this.speechSynthesisProperties.utterance.addEventListener(
      "end",
      this.#soundEnd.bind(this)
    );

    this.speechSynthesisProperties.utterance.addEventListener(
      "error",
      this.#soundError.bind(this)
    );
  }

  #initSpeechSynthesis() {
    const voices = window.speechSynthesis.getVoices();

    this.speechSynthesisProperties.speech =
      !this.speechSynthesisProperties.speech;

    this.speechSynthesisProperties.voiceRu = voices[15];
    this.speechSynthesisProperties.voiceEn = voices[1];
  }

  speechSynthesisParameters(
    event: Event,
    textareaValue: string,
    keyboardLanguage: string
  ) {
    const elementBtn = event.currentTarget as HTMLButtonElement;
    const elementIcon = event.target as HTMLElement;

    this.speechSynthesisProperties.buttonSound = elementBtn;
    this.speechSynthesisProperties.iconButtonSound = elementIcon;
    this.speechSynthesisProperties.currentLanguage = keyboardLanguage;
    this.speechSynthesisProperties.currentTextareaValue = textareaValue;

    if (!speechSynthesis.speaking && this.speechSynthesisProperties.speech) {
      this.#convertTextToSpeech();
    }
  }

  #convertTextToSpeech() {
    const trimmed = this.speechSynthesisProperties.currentTextareaValue!.trim();
    if (!trimmed) return;

    const utterance = this.speechSynthesisProperties.utterance;

    utterance.text = trimmed;

    utterance.voice =
      this.speechSynthesisProperties.currentLanguage === "eng"
        ? this.speechSynthesisProperties.voiceEn
        : this.speechSynthesisProperties.voiceRu;

    utterance.lang =
      this.speechSynthesisProperties.currentLanguage === "eng"
        ? this.speechSynthesisProperties.voiceEn!.lang
        : this.speechSynthesisProperties.voiceRu!.lang;

    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;

    this.speechSynthesisProperties.synthesis.speak(utterance);
  }

  #soundStart() {
    this.speechSynthesisProperties.iconButtonSound?.classList.add(
      "key-keyboard__icon--soundGreen"
    );
    this.speechSynthesisProperties.buttonSound!.disabled = true;
  }

  #soundEnd() {
    this.speechSynthesisProperties.iconButtonSound?.classList.remove(
      "key-keyboard__icon--soundGreen"
    );
    this.speechSynthesisProperties.buttonSound!.disabled = false;
  }

  #soundError(error: object) {
    console.log(error);
  }
}
