const refs = {
  nameInputRef: document.querySelector('#name-input'),
  nameOutputRef: document.querySelector('#name-output'),
};

refs.nameInputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length > 0
    ? (refs.nameOutputRef.textContent = event.currentTarget.value)
    : (refs.nameOutputRef.textContent = 'незнакомец');
}

/*
  Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
  
  <input type="text" placeholder = "Ваше имя?" id = "name-input" />
  <h1>Привет, <span id = "name-output">незнакомец</span>!</h1>
  */
