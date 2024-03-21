import {blankCard, newCardForm, newCardPopup, placesList} from './index.js'
import { openImage } from './modal.js';

  function createCard(cardTitle, cardImage, deleteFunction, likeFunction, popupFunction) {
  
    const cardElement = blankCard.cloneNode(true);
    const cardElementImage = cardElement.querySelector('.card__image')
  
    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElementImage.src = cardImage;
    cardElementImage.alt = `Красивый вид ${cardTitle}`;
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteFunction);
    cardElement.querySelector('.card__like-button').addEventListener('click', likeFunction);
    cardElement.querySelector('.card__image').addEventListener('click', popupFunction);
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

  function handleCardSubmit(evt) {
    evt.preventDefault();        
    newCardPopup.classList.remove('popup_is-opened');
    const placeInput = newCardForm.querySelector('.popup__input_type_card-name'); 
    const placeImage = newCardForm.querySelector('.popup__input_type_url');
    const newCard = createCard(placeInput.value, placeImage.value, deleteCard, likeCard, openImage);
    placesList.prepend(newCard);
    newCardForm.removeEventListener('submit', handleCardSubmit);
  }
 
  export { createCard, deleteCard, likeCard, handleCardSubmit };