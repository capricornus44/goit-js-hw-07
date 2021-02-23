const inputRef = document.querySelector('#controls input');
//console.log(inputRef);

const btnCreateRef = document.querySelector('[data-action="render"]');
//console.log(btnCreateRef);

const btnDestroyRef = document.querySelector('[data-action="destroy"]');
//console.log(btnDestroyRef);

const boxesContainerRef = document.querySelector('#boxes');
//console.log(boxesContainerRef);

btnCreateRef.addEventListener('click', () => createBoxes(inputRef.value));
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
}

function createBoxes(amount) {
  let temporaryArray = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    temporaryArray.push(element);
  }
  boxesContainerRef.append(...temporaryArray);
  console.log(boxesContainerRef);
}

/*
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/
