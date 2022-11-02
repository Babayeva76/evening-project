const products = [
  {
    id: 1,
    imageScr: './assets/product1.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 17490
  }, {
    id: 2,
    imageScr: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 19490
  }, {
    id: 3,
    imageScr: './assets/product3.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 15220
  }, {
    id: 4,
    imageScr: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 13320
  }, {
    id: 5,
    imageScr: './assets/product1.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 16490
  }, {
    id: 6,
    imageScr: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 17490
  }, {
    id: 7,
    imageScr: './assets/product3.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 12490
  }, {
    id: 8,
    imageScr: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 15490
  }, 
];

const cardsContainer = document.querySelector('.bestsellers-right');

for (const product of products) {
  renderProductCard(product);
}

function renderProductCard(product) {
  const card = document.createElement('div');
  cardsContainer.appendChild(card);
  card.outerHTML = getProductCardMarkup(product);
}

function getProductCardMarkup(product) {
  return `
    <div class="product-item">
      <img src="${product.imageScr}" alt="">
      <span class="title">${product.title}</span>
      <span class="price">${product.price} ₽</span>
    </div>
  `;
}

let currentSlideNumber = 0;
const firstCard = document.querySelector('.product-item:first-child');
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');

function handleCarouselButtonClick(direction) {
  currentSlideNumber += direction;
  const margin = -390 * currentSlideNumber;
  firstCard.style.marginLeft = `${margin}px`;

  if(currentSlideNumber === 0) {
    leftButton.setAttribute('disabled', true);
  } else {
    leftButton.removeAttribute('disabled');
  }

  if(currentSlideNumber === products.length - 3) {
    rightButton.setAttribute('disabled', true);
  } else {
    rightButton.removeAttribute('disabled');
  }
}

const funnyButton = document.querySelector('.funny-button');

function handleFunnyButtonClick() {
  // if (funnyButton.classList.contains('funny')) {
  //   funnyButton.classList.remove('funny');
  // } else {
  //   funnyButton.classList.add('funny');
  // }
  funnyButton.classList.toggle('funny');
}