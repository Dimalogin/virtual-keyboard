const headerModalWindowTemplate = document.createElement("template");

headerModalWindowTemplate.innerHTML = `   
    <div
      class="specification-header__modal-content modal-content-specification"
    >
      <div class="modal-content-specification__body">
        <button class="modal-content-specification__button-close" type="button">
          &#10006;
        </button>
        <span class="modal-content-specification__text"
          >virtual keyboard instructions</span
        >
      </div>
    </div>

`;

export default headerModalWindowTemplate;
