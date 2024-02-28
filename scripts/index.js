
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const blankCard = cardTemplate.querySelector('.card');

// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardTitle, cardImage, deleteFunction) {
  
  const cardElement = blankCard.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image')

  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElementImage.src = cardImage;
  cardElementImage.alt = `Красивый вид ${cardTitle}`;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteFunction);

  return(cardElement);
}
// @todo: Функция удаления карточки
function deleteCard(event) {
  const cardItem = event.target.closest('.card');
  console.log(cardItem.name);
  cardItem.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link, deleteCard);
  placesList.append(newCard);
});




