const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainerRef = document.querySelector('#gallery');
//console.log(galleryContainerRef);

const makeGalleryElement = ({ url, alt }) => {
  return `<li class="js-gallery__item"><img class="js-gallery__image" src="${url}" alt="${alt}"></li>`;
};

const galleryElements = images.map(makeGalleryElement).join('');
galleryContainerRef.insertAdjacentHTML('beforeend', galleryElements);
//galleryContainerRef.style.backgroundColor = 'tomato';

console.log(galleryContainerRef);

/*
  Напиши скрипт для создания галлереи изображений по массиву данных.
  В HTML есть список ul#gallery:
  
  <ul id="gallery"></ul>
  
  1. Используй массив объектов images для создания тегов img вложенных в li.
  2. Для создания разметки используй шаблонные строки и insertAdjacentHTML().
  3. Все элементы галереи должны добавляться в DOM за одну операцию вставки.
  4. Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
  
  const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  */
