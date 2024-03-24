import { createCard, deleteCard, likeCard/* , handleCardSubmit */ } from './card.js'
import {  openImage/* , escapePopup */, closePopup/* , handleEscape , openModal , closeModal */, openPopup, handleFormSubmit} from './modal.js'   //handleFormSubmit,
import {initialCards} from './cards.js'

const cardTemplate = document.querySelector('#card-template').content;
export const blankCard = cardTemplate.querySelector('.card');
const content = document.querySelector('.content');
export const placesList = content.querySelector('.places__list');
const editProfileButton = content.querySelector('.profile__edit-button');
export const editProfilePopup = document.querySelector('.popup_type_edit');
export const formElement = editProfilePopup.querySelector('.popup__form');
export const currentProfileName = document.querySelector('.profile__title');
export const currentProfileJob = document.querySelector('.profile__description');
export const profileNameInput = formElement.querySelector('.popup__input_type_name');
export const profileJobInput = formElement.querySelector('.popup__input_type_description');
const newCardButton = document.querySelector('.profile__add-button');
 const newCardPopup = document.querySelector('.popup_type_new-card');
 const newCardForm = newCardPopup.querySelector('.popup__form');
 const placeInput = newCardForm.querySelector('.popup__input_type_card-name'); 
  const placeImage = newCardForm.querySelector('.popup__input_type_url');
export const imagePopup = document.querySelector('.popup_type_image');
const popups = document.querySelectorAll('.popup')

/* function handleFormSubmit(popup) {  
  console.log('Запущена handleFormSubmit');
  currentProfileName.textContent = profileNameInput.value;
  currentProfileJob.textContent = profileJobInput.value;
  closePopup(popup);  
} */

document.addEventListener('submit', function (evt) {
  evt.preventDefault(); 
  if (evt.target.getAttribute('name') === 'edit-profile') {
    handleFormSubmit(editProfilePopup);
  }
  if (evt.target.getAttribute('name') === 'new-place') {
    handleCardSubmit(newCardPopup);
  }
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })

});

function handleCardSubmit(evt) {
  /* evt.preventDefault();    */     
  /* newCardPopup.classList.remove('popup_is-opened'); */
  /* const placeInput = newCardForm.querySelector('.popup__input_type_card-name'); 
  const placeImage = newCardForm.querySelector('.popup__input_type_url'); */
  const newCard = createCard(placeInput.value, placeImage.value, deleteCard, likeCard, openImage);
  placesList.prepend(newCard);
  /* newCardForm.removeEventListener('submit', handleCardSubmit); */

}

initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link, deleteCard, likeCard, openImage);
  placesList.append(newCard);
});

editProfileButton.addEventListener('click', function (evt) {
  openPopup(editProfilePopup);
  profileNameInput.value = currentProfileName.textContent;
  profileJobInput.value = currentProfileJob.textContent;
});

newCardButton.addEventListener('click', (evt) => {
  openModal(newCardPopup, '', '');
  newCardForm.addEventListener('submit', handleCardSubmit);
  document.addEventListener('keydown', escapePopup);
  newCardPopup.addEventListener('click', closePopup );
})


import '../pages/index.css';

