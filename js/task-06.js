const inputValidationRef = document.querySelector('#validation-input');

// inputValidationRef.addEventListener('focus', () => {
//   inputValidationRef.classList = '';
// });

inputValidationRef.addEventListener('blur', onInputValidation);

function onInputValidation() {
  if (inputValidationRef.value.length !== Number(inputValidationRef.getAttribute('data-length'))) {
    inputValidationRef.classList.add('invalid');
    inputValidationRef.classList.remove('valid');
  } else {
    inputValidationRef.classList.add('valid');
    inputValidationRef.classList.remove('invalid');
  }
}

/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/
