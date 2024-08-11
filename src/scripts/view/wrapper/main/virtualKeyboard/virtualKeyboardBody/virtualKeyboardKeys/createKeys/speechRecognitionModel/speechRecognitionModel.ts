// Styles

import "./speechRecognitionModel.scss";

// Scripts

// Types

import { SpeechRecoginitionProperties } from "../../../../../../../../../types/types";
import { SpeechRecoginitionDictionary } from "../../../../../../../../../types/types";

// Parameters

const DICTIONARY: any = {
  точка: ".",
  запятая: ",",
  вопрос: "?",
  восклицание: "!",
  двоеточие: ":",
  тире: "-",
  абзац: "\n",
  отступ: "\t",
};

export default class SpeechRecognitionModel {
  keyboardVirtualScreenView: HTMLElement | null = null;
  screenKeyboardVirtualTextarea: HTMLTextAreaElement | null = null;

  displayEntryFieldInput: HTMLInputElement | null = null;
  entryFieldConfirmBtn: HTMLButtonElement | null = null;
  entryFieldCancelBtn: HTMLButtonElement | null = null;

  speechRecoginitionProperties: SpeechRecoginitionProperties = {
    recognition: null,
    recording: false,
    finalResult: "",
    buttonMicrophone: null,
    iconButtonMicrophone: null,
    currentTextareaValue: "",
  };

  constructor(keyboardVirtualScreenView: HTMLElement) {
    this.keyboardVirtualScreenView = keyboardVirtualScreenView;

    this.#initTemplate();
    this.#initSpeechRecoginition();
    this.#bindListeners();
  }

  #initTemplate() {
    this.screenKeyboardVirtualTextarea =
      this.keyboardVirtualScreenView?.querySelector(
        ".screen-keyboard-virtual__textarea"
      ) as HTMLTextAreaElement;

    this.displayEntryFieldInput = this.keyboardVirtualScreenView?.querySelector(
      ".display-entry-field__input"
    ) as HTMLInputElement;

    this.entryFieldConfirmBtn = this.keyboardVirtualScreenView?.querySelector(
      ".entry-field__confirm-btn"
    ) as HTMLButtonElement;

    this.entryFieldCancelBtn = this.keyboardVirtualScreenView?.querySelector(
      ".entry-field__cancel-btn"
    ) as HTMLButtonElement;
  }

  #initSpeechRecoginition() {
    const wind = window as any;

    const speechRecognition =
      wind.SpeechRecognition || wind.webkitSpeechRecognition;

    this.speechRecoginitionProperties.recognition = new speechRecognition();
    const recognition = this.speechRecoginitionProperties.recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 3;
    recognition.lang = "ru-RU";
  }

  #bindListeners() {
    this.speechRecoginitionProperties.recognition.addEventListener(
      "start",
      this.#microphoneStart.bind(this)
    );

    this.speechRecoginitionProperties.recognition.addEventListener(
      "error",
      this.#microphoneError.bind(this)
    );

    this.speechRecoginitionProperties.recognition.addEventListener(
      "end",
      this.#microphoneEnd.bind(this)
    );

    this.speechRecoginitionProperties.recognition.addEventListener(
      "result",
      this.#recordionResult.bind(this)
    );

    this.entryFieldConfirmBtn?.addEventListener(
      "click",
      this.#addResult.bind(this)
    );

    this.entryFieldCancelBtn?.addEventListener(
      "click",
      this.#cancelResult.bind(this)
    );
  }

  startRecording(event: Event, textareaValue: string) {
    const elementBtn = event.currentTarget as HTMLButtonElement;
    const elementIcon = event.target as HTMLElement;

    this.speechRecoginitionProperties.buttonMicrophone = elementBtn;
    this.speechRecoginitionProperties.iconButtonMicrophone = elementIcon;
    this.speechRecoginitionProperties.currentTextareaValue = textareaValue;

    this.entryFieldConfirmBtn!.disabled = true;
    this.entryFieldCancelBtn!.disabled = true;

    const recognition = this.speechRecoginitionProperties.recognition;

    if (!this.speechRecoginitionProperties.recording) {
      recognition.start();
      this.speechRecoginitionProperties.recording = true;
    } else {
      recognition.stop();
      this.speechRecoginitionProperties.recording = false;
    }
  }

  #recordionResult(e: any) {
    let interim_transcript = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        const result = this.#editInterim(e.results[i][0].transcript);
        this.speechRecoginitionProperties.finalResult += result;
      } else {
        interim_transcript += e.results[i][0].transcript;
      }
    }

    this.displayEntryFieldInput!.value = interim_transcript;

    this.speechRecoginitionProperties.finalResult = this.#editFinal(
      this.speechRecoginitionProperties.finalResult
    );
    this.displayEntryFieldInput!.disabled = false;
    this.displayEntryFieldInput!.value =
      this.speechRecoginitionProperties.finalResult;
  }

  #editInterim(s: string) {
    return s
      .split(" ")
      .map((word) => {
        word = word.trim();
        return DICTIONARY[word.toLowerCase()]
          ? DICTIONARY[word.toLowerCase()]
          : word;
      })
      .join(" ");
  }

  #editFinal(s: string) {
    return s.replace(/\s{1,}([\.+,?!:-])/g, "$1");
  }

  #addResult() {
    this.speechRecoginitionProperties.currentTextareaValue += ` ${this.speechRecoginitionProperties.finalResult}`;
    this.displayEntryFieldInput!.disabled = true;
    this.entryFieldConfirmBtn!.disabled = true;
    this.entryFieldCancelBtn!.disabled = true;
    this.speechRecoginitionProperties.finalResult = "";
    this.displayEntryFieldInput!.value = "";

    this.#triggerEvent();
  }

  #cancelResult() {
    this.displayEntryFieldInput!.value = "";
    this.displayEntryFieldInput!.disabled = true;
    this.entryFieldConfirmBtn!.disabled = true;
    this.entryFieldCancelBtn!.disabled = true;
    this.speechRecoginitionProperties.finalResult = "";
  }

  #microphoneStart() {
    console.log("Распознавание голоса запущено");

    this.speechRecoginitionProperties.iconButtonMicrophone?.classList.add(
      "key-keyboard__icon--microphoneGreen"
    );
  }

  #triggerEvent() {
    this.screenKeyboardVirtualTextarea!.value =
      this.speechRecoginitionProperties.currentTextareaValue;
  }

  #microphoneError(error: object) {
    console.error(error);
  }

  #microphoneEnd() {
    console.log("Распознавание голоса закончено");

    this.speechRecoginitionProperties.iconButtonMicrophone?.classList.remove(
      "key-keyboard__icon--microphoneGreen"
    );

    this.entryFieldConfirmBtn!.disabled = false;
    this.entryFieldCancelBtn!.disabled = false;
  }
}
