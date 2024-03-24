/* import {blankCard} from './index.js' */
const cardTemplate = document.querySelector('#card-template').content;
const blankCard = cardTemplate.querySelector('.card');

  function createCard(cardTitle, cardImage, deleteFunction, likeFunction, popupFunction) {
  
    const cardElement = blankCard.cloneNode(true);
    const cardElementImage = cardElement.querySelector('.card__image')
  
    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElementImage.src = cardImage;
    cardElementImage.alt = `Красивый вид ${cardTitle}`;
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteFunction);
    cardElement.querySelector('.card__like-button').addEventListener('click', likeFunction);
    cardElementImage.addEventListener('click', popupFunction);
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

   
  export { createCard, deleteCard, likeCard};