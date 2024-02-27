
// @todo: Темплейт карточки

// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(cardTitle, cardImage, deleteFunction) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector('.card__image').src = cardImage; 
  cardElement.querySelector('.card__image').alt = `Красивый вид ${cardTitle}`; 
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteFunction);        
  
  placesList.append(cardElement);
}
// @todo: Функция удаления карточки
function deleteCard(event) {
  const cardItem = event.target.closest('.card');  
  console.log(cardItem.name); 
  cardItem.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
 
  addCard(item.name, item.link, deleteCard);
 
});



 
