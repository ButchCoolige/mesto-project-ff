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

document.addEventListener('submit', function (evt) {
  evt.preventDefault(); 
  console.log(evt.target.getAttribute('name'));
  if (evt.target.getAttribute('name') === 'edit-profile') {
    console.log('Выбрали форму профиля');
    handleFormSubmit;
    }
   if (evt.target.getAttribute('name') === 'new-place') {
    handleCardSubmit;
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
  /* openModal(editProfilePopup, currentProfileName.textContent, currentProfileJob.textContent); */
  openPopup(editProfilePopup);
 profileNameInput.value = currentProfileName.textContent;
 profileJobInput.value = currentProfileJob.textContent;
  /* const elementFirstInput = element.querySelector('.popup__input');
    const elementSecondInput = elementFirstInput.nextElementSibling;
    elementFirstInput.value = inputFirstContent;
    elementSecondInput.value = inputSecondContent; */
  /* formElement.addEventListener('submit', handleFormSubmit);
  document.addEventListener('keydown', escapePopup);    
  editProfilePopup.addEventListener('click', closePopup);  */
  
});

newCardButton.addEventListener('click', (evt) => {
  openModal(newCardPopup, '', '');
  newCardForm.addEventListener('submit', handleCardSubmit);
  document.addEventListener('keydown', escapePopup);
  newCardPopup.addEventListener('click', closePopup );
})


import '../pages/index.css';

