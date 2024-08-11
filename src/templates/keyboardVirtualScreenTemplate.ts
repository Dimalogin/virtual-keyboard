const keyboardVirtualScreenTemplate = document.createElement("template");

keyboardVirtualScreenTemplate.innerHTML = `
   <div class="keyboard-virtual__screen screen-keyboard-virtual">
      <textarea class="screen-keyboard-virtual__textarea"></textarea>
      <div class="screen-keyboard-virtual__entry-field">
        <div class="entry-field__display display-entry-field">
          <span class="display-entry-field__icon display-entry-field__icon--microphone"></span>
          <input class="display-entry-field__input" type="text" disabled />
        </div>
        <div class="entry-field__buttons buttons-entry-field">
          <button
            class="buttons-entry-field__button entry-field__confirm-btn"
            title="Add result"
            disabled
          >
            <span class="confirm-btn__icon confirm-btn__icon--checkmark"></span>
          </button>
          <button
            class="buttons-entry-field__button entry-field__cancel-btn"
            title="Reset field"
             disabled
          >
            <span class="cancel-btn__icon cancel-btn__icon--cancel"></span>
          </button>
        </div>
      </div>
    </div>
`;

export default keyboardVirtualScreenTemplate;
