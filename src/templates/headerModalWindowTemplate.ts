const headerModalWindowContentTemplate = document.createElement("template");

headerModalWindowContentTemplate.innerHTML = `   
 <div
      class="specification-header__modal-content modal-content-specification"
    >
      <div class="modal-content-specification__body">
        <button class="modal-content-specification__button-close" type="button">
          &#10006;
        </button>
        <ul class="modal-content-specification__list">
          
           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               <i class = 'modal-content-specification__icon modal-content-specification__icon--backspace'></i>
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--backspace'>
                erase everything in front of the cursor
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               Tab
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--tab'>
               horizontal indent
             </span>
           </li>

          <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               <i class = 'modal-content-specification__icon modal-content-specification__icon--capslock'></i>
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--capslock'>
              case change
             </span>
           </li>

          <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               <i class = 'modal-content-specification__icon modal-content-specification__icon--enter'></i>
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--enter'>
              line feed
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
              Shipt
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--shift'>
              nothing
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
              Ctrl
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--ctrl'>
                nothing
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
              Win
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--win'>
                  nothing
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               Alt
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--alt'>
                nothing
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               Eng / Ru
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--lang'>
               change layout
             </span>
           </li>
         
           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               <i class = 'modal-content-specification__icon modal-content-specification__icon--space'></i>
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--space'>
                letter spacing
             </span>
           </li>
                  
           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               <i class = 'modal-content-specification__icon modal-content-specification__icon--sound'></i>
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--sound'>
               voiceover of the text
             </span>
           </li>

           <li class='modal-content-specification__item'>
             <span class='modal-content-specification__meaning'>
               <i class = 'modal-content-specification__icon modal-content-specification__icon--microphone'></i>
             </span>
             -
             <span class = 'modal-content-specification__description modal-content-specification__description--microphone'>
               speech recognition
             </span>
           </li>

        </ul>
      </div>
    </div>
`;

export default headerModalWindowContentTemplate;
