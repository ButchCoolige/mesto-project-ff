const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function deleteCard(cardItem) {
  console.log(cardItem);
 
  cardItem.remove();
}

function addCard(cardTitle, cardImage) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);


  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector('.card__image').src = cardImage; 
  cardElement.querySelector('.card__image').alt = `Красивый вид ${cardTitle}`; 
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('.card__like-button_is-active ');
  })
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard(cardElement) /* {
    const cardItem = cardElement.closest('.card');
    cardItem.remove();
  } */
  );
  

  placesList.append(cardElement);
}

initialCards.forEach(function (item) {
 // console.log('program started');
  addCard(item.name, item.link);
 // console.log('функция внутри initialCard запустилась');
});

