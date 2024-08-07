const keyboardVirtualScreenTemplate = document.createElement("template");

keyboardVirtualScreenTemplate.innerHTML = `
   <div class="keyboard-virtual__screen screen-keyboard-virtual">
      <textarea class="screen-keyboard-virtual__textarea"></textarea>
      <div class="screen-keyboard-virtual__entry-field">
        <div class="entry-field__display display-entry-field">
          <span class="display-entry-field__icon display-entry-field__icon--microphone"></span>
          <input class="display-entry-field__input" type="text" />
        </div>
        <div class="entry-field__buttons buttons-entry-field">
          <button
            class="buttons-entry-field__confirm-btn confirm-buttons-entry-field"
            title="Add result"
            disabled
          >
            <span class="confirm-buttons-entry-field__icon confirm-buttons-entry-field__icon--checkmark"></span>
          </button>
          <button
            class="buttons-entry-field__cancel-btn cancel-buttons-entry-field"
            title="Reset field"
             disabled
          >
            <span class="cancel-buttons-entry-field__icon cancel-buttons-entry-field__icon--cancel"></span>
          </button>
        </div>
      </div>
    </div>
`;

export default keyboardVirtualScreenTemplate;
