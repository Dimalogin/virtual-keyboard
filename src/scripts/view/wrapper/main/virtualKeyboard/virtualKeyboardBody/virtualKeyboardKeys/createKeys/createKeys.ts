// Styles

import "./createKeys.scss";

// Scripts

import SpeechSynthesisModel from "./speechSynthesisModel/speechSynthesisModel";

// Types

import { VirtualKeyboardProperties } from "../../../../../../../../types/types";

// Data

import { arrayEngKeys } from "../../../../../../../../data/keys";
import { arrayRuKeys } from "../../../../../../../../data/keys";

// Parameters

export default class CreateKeys {
  virtualKeyboardKeysView: HTMLElement | null = null;
  keyboardVirtualScreenView: HTMLElement | null = null;
  screenKeyboardVirtualTextarea: HTMLTextAreaElement | null = null;
  keysFragment: DocumentFragment | null = null;

  displayEntryFieldInput: HTMLElement | null = null;
  entryFieldConfirmBtn: HTMLElement | null = null;
  entryFieldCancelBtn: HTMLElement | null = null;

  speechSynthesisModel: SpeechSynthesisModel | null = null;

  virtualKeyboardProperties: VirtualKeyboardProperties = {
    textareaValue: "",
    keyboardLanguage: "eng",
    keyboardCapslock: false,
  };

  constructor(
    virtualKeyboardKeysView: HTMLElement | null,
    keyboardVirtualScreenView: HTMLElement | null
  ) {
    this.virtualKeyboardKeysView = virtualKeyboardKeysView;
    this.keyboardVirtualScreenView = keyboardVirtualScreenView;

    this.#initTemplate();
    this.#bindListeners();

    this.#createKeys();
    this.#renderKeys();

    this.#initSpeechSynthesisModel();
  }

  #initTemplate() {
    this.screenKeyboardVirtualTextarea =
      this.keyboardVirtualScreenView?.querySelector(
        ".screen-keyboard-virtual__textarea"
      ) as HTMLTextAreaElement;

    this.displayEntryFieldInput = this.keyboardVirtualScreenView?.querySelector(
      ".display-entry-field__input"
    ) as HTMLElement;

    this.entryFieldConfirmBtn = this.keyboardVirtualScreenView?.querySelector(
      ".buttons-entry-field__confirm-btn"
    ) as HTMLElement;

    this.entryFieldCancelBtn = this.keyboardVirtualScreenView?.querySelector(
      ".buttons-entry-field__cancel-btn"
    ) as HTMLElement;
  }

  #bindListeners() {
    document.addEventListener(
      "keydown",
      this.#keyboardBacklightByKey.bind(this)
    );
    document.addEventListener("keydown", this.#triggerEventKeys.bind(this));

    this.screenKeyboardVirtualTextarea?.addEventListener(
      "input",
      this.#setTextareaValue.bind(this)
    );
  }

  #setTextareaValue(event: Event) {
    const target = event.target as HTMLInputElement;
    const initialValue: string = target.value;
    this.virtualKeyboardProperties.textareaValue = initialValue || "";
  }

  #createKeys() {
    const keys: Array<string> =
      this.virtualKeyboardProperties.keyboardLanguage === "eng"
        ? arrayEngKeys
        : arrayRuKeys;

    this.keysFragment = keys.reduce((fragment, currentValue) => {
      const keyElement: HTMLElement = document.createElement(
        "button"
      ) as HTMLElement;

      const insertLineBreak: boolean =
        ["backspace", "ъ", "]", "enter", "/", "?"].indexOf(currentValue) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (currentValue) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.dataset.type = "backspace";
          keyElement.textContent = "backspace";
          keyElement.innerHTML = this.#createIconHTML("backspace")!;
          keyElement.addEventListener("click", this.#setBackspace.bind(this));

          break;

        case "tab":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.textContent = "Tab";
          keyElement.addEventListener("click", this.#setTab.bind(this));

          break;

        case "caps":
          keyElement.classList.add(
            "keyboard__key--wide",
            "keyboard__key--activatable"
          );
          keyElement.innerHTML = this.#createIconHTML("keyboard_capslock")!;
          keyElement.dataset.type = "capslock";
          keyElement.addEventListener("click", this.#setCapslock.bind(this));

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = this.#createIconHTML("keyboard_return")!;
          keyElement.dataset.type = "enter";
          keyElement.addEventListener("click", this.#setEnter.bind(this));

          break;

        case "Shift":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.textContent = "Shift";
          keyElement.addEventListener("click", this.#setShift.bind(this));

          break;

        case "Ctrl":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.textContent = "Ctrl";
          keyElement.dataset.type = "control";
          keyElement.addEventListener("click", this.#setCtrl.bind(this));

          break;

        case "Win":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.textContent = "Win";
          keyElement.addEventListener("click", this.#setWin.bind(this));

          break;

        case "Alt":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.textContent = "Alt";
          keyElement.addEventListener("click", this.#setAlt.bind(this));

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = this.#createIconHTML("space_bar")!;
          keyElement.dataset.type = " ";
          keyElement.addEventListener("click", this.#setSpace.bind(this));

          break;

        case "sound":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = this.#createIconHTML("soundWhite")!;

          keyElement.addEventListener(
            "click",

            this.#speechSynthesisHandlers.bind(this)
          );
          break;

        case "microphone":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = this.#createIconHTML("microphone")!;
          // keyElement.addEventListener("click", this.startRecording.bind(this));

          break;

        case "lang":
          const currentLanguage: string =
            this.virtualKeyboardProperties.keyboardLanguage;
          keyElement.textContent = currentLanguage;
          keyElement.addEventListener(
            "click",
            this.#setToggleLanguage.bind(this)
          );

          break;

        default:
          keyElement.textContent = currentValue.toLowerCase();
          keyElement.dataset.symbol = "";
          keyElement.addEventListener("click", this.#setValue.bind(this));

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        const br = document.createElement("br");
        fragment.appendChild(br);
      }

      return fragment;
    }, document.createDocumentFragment() as DocumentFragment);
  }

  #setBackspace(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;

    this.virtualKeyboardProperties.textareaValue =
      this.virtualKeyboardProperties.textareaValue.substring(
        0,
        this.virtualKeyboardProperties.textareaValue.length - 1
      );

    this.#keyboardBacklightByClick(target);
    this.#triggerEvent();
  }

  #setTab(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;

    this.virtualKeyboardProperties.textareaValue += "    ";

    this.#keyboardBacklightByClick(target);
    this.#triggerEvent();
  }

  #setCapslock(event: Event) {
    const element = event!.currentTarget as HTMLButtonElement;

    this.virtualKeyboardProperties.keyboardCapslock =
      !this.virtualKeyboardProperties.keyboardCapslock;

    element.classList.toggle(
      "keyboard__key--active",
      this.virtualKeyboardProperties.keyboardCapslock
    );

    this.#keyboardBacklightByClick(element);
    this.#switchRegister();
  }

  #switchRegister() {
    const elements = Array.from(this.virtualKeyboardKeysView!.children);

    elements.forEach((item) => {
      if (item.hasAttribute("data-symbol")) {
        item.textContent = this.virtualKeyboardProperties.keyboardCapslock
          ? item.textContent!.toUpperCase()
          : item.textContent!.toLowerCase();
      }
    });
  }

  #setEnter(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;

    this.virtualKeyboardProperties.textareaValue += "\n";

    this.#keyboardBacklightByClick(target);
    this.#triggerEvent();
  }

  #setShift(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;
    this.#keyboardBacklightByClick(target);
  }

  #setCtrl(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;
    this.#keyboardBacklightByClick(target);
  }

  #setWin(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;
    this.#keyboardBacklightByClick(target);
  }

  #setAlt(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;
    this.#keyboardBacklightByClick(target);
  }

  #setSpace(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;

    this.virtualKeyboardProperties.textareaValue += " ";

    this.#keyboardBacklightByClick(target);
    this.#triggerEvent();
  }

  #setToggleLanguage() {
    switch (this.virtualKeyboardProperties.keyboardLanguage) {
      case "eng":
        this.virtualKeyboardProperties.keyboardLanguage = "ru";
        this.virtualKeyboardProperties.keyboardCapslock = false;

        break;
      case "ru":
        this.virtualKeyboardProperties.keyboardLanguage = "eng";
        this.virtualKeyboardProperties.keyboardCapslock = false;
        break;
    }

    this.#createKeys();
    this.#clearKeyboard();
    this.#renderKeys();
  }

  #clearKeyboard() {
    this.virtualKeyboardKeysView!.innerHTML = "";
  }

  #setValue(event: Event) {
    const target = event.target as HTMLButtonElement;
    this.virtualKeyboardProperties.textareaValue += target.textContent;
    this.#keyboardBacklightByClick(target);

    this.#triggerEvent();
  }

  #keyboardBacklightByClick(element: HTMLButtonElement) {
    element.classList.add("keyboard__key--backlight");
    setTimeout(() => {
      element.classList.remove("keyboard__key--backlight");
    }, 100);
  }

  #keyboardBacklightByKey(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    const elements = Array.from(
      this.virtualKeyboardKeysView!.children
    ) as Array<HTMLButtonElement>;

    elements.forEach((item) => {
      const type = item.dataset.type ? item.dataset.type : null;
      const letter = item.textContent?.toLowerCase();

      if (key === letter || key === type) {
        item.classList.add("keyboard__key--backlight");
        setTimeout(() => {
          item.classList.remove("keyboard__key--backlight");
        }, 100);
      }
    });
  }

  #triggerEventKeys(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    const elements = Array.from(
      this.virtualKeyboardKeysView!.children
    ) as Array<HTMLButtonElement>;

    elements.forEach((item) => {
      const type = item.dataset.type ? item.dataset.type : null;

      if (type === "capslock" && key === "capslock") {
        console.log("caps");
        this.#setCapslockByKey(item);
      }
    });
  }

  #setCapslockByKey(element: HTMLElement) {
    this.virtualKeyboardProperties.keyboardCapslock =
      !this.virtualKeyboardProperties.keyboardCapslock;

    element.classList.toggle(
      "keyboard__key--active",
      this.virtualKeyboardProperties.keyboardCapslock
    );

    this.#switchRegister();
  }

  #triggerEvent() {
    this.screenKeyboardVirtualTextarea!.value =
      this.virtualKeyboardProperties.textareaValue;
  }

  #renderKeys() {
    this.virtualKeyboardKeysView?.append(this.keysFragment!);
  }

  #createIconHTML(iconName: string): string | undefined {
    if (iconName === "backspace") {
      return `<i class="key-keyboard__icon key-keyboard__icon--${iconName}"></i>`;
    } else if (iconName === "keyboard_capslock") {
      return `<i class="key-keyboard__icon key-keyboard__icon--${iconName}"></i>`;
    } else if (iconName === "keyboard_return") {
      return `<i class="key-keyboard__icon key-keyboard__icon--${iconName}"></i>`;
    } else if (iconName === "space_bar") {
      return `<i class="key-keyboard__icon key-keyboard__icon--${iconName}"></i>`;
    } else if (iconName === "soundWhite") {
      return `<i class="key-keyboard__icon key-keyboard__icon--${iconName}"></i>`;
    } else if (iconName === "microphone") {
      return `<i class="key-keyboard__icon key-keyboard__icon--${iconName}"></i>`;
    }
  }

  // Speech Synthesis

  #initSpeechSynthesisModel() {
    this.speechSynthesisModel = new SpeechSynthesisModel();
  }

  #speechSynthesisHandlers(event: Event) {
    this.speechSynthesisModel?.speechSynthesisParameters(
      event,
      this.virtualKeyboardProperties.textareaValue,
      this.virtualKeyboardProperties.keyboardLanguage
    );
  }
}
