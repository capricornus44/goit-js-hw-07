const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsContainerRef = document.querySelector('#ingredients');
console.log(ingredientsContainerRef);

const makeIngredientsElement = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
  });
};

const ingredientsElements = makeIngredientsElement(ingredients);
ingredientsContainerRef.append(...ingredientsElements);

/*
  В JS есть массив строк:
  
  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
  после чего вставит все li за одну операцию в список ul.ingredients. 
  Для создания DOM-узлов используй document.createElement().
*/
