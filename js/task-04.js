const counterValue = document.querySelector('#value');

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const btnDecrementRef = document.querySelector('button[data-action = "decrement"]');
btnDecrementRef.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

const btnIncrementRef = document.querySelector('button[data-action = "increment"]');
btnIncrementRef.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

1. Создай переменную counterValue в которой будет хранится текущее значение счетчика.
2. Создай функции increment и decrement для увеличения и уменьшения значения счетчика
3. Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/
