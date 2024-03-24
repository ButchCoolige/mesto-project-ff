const cardTemplate = document.querySelector('#card-template').content;
const blankCard = cardTemplate.querySelector('.card');
const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function renderCard(item, method = 'apppend') {  
  placesList[ method ](item);
}

function createCard(options) {
  
  const cardElement = blankCard.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image')
  
  cardElement.querySelector('.card__title').textContent = options.cardTitle;
  cardElementImage.src = options.cardImage;
  cardElementImage.alt = `Красивый вид ${options.cardTitle}`;
  cardElement.querySelector('.card__delete-button').addEventListener('click', options.deleteFunction);
  cardElement.querySelector('.card__like-button').addEventListener('click', options.likeFunction);
  cardElementImage.addEventListener('click', options.popupFunction);
  return(cardElement);
}

function deleteCard(event) {
  const cardItem = event.target.closest('.card');
  cardItem.remove();
}
  
function likeCard(event) {
  const cardLikeButton = event.target;
  cardLikeButton.classList.toggle('card__like-button_is-active');
}
   
export { createCard, deleteCard, likeCard, renderCard };