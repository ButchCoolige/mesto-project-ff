import { createCard, deleteCard, likeCard, handleCardSubmit } from './card.js'
import {  openImage, escapePopup, openModal, closeModal, handleFormSubmit} from './modal.js'   //handleFormSubmit,
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
const newCardButton = document.querySelector('.profile__add-button');
export const newCardPopup = document.querySelector('.popup_type_new-card');
export const newCardForm = newCardPopup.querySelector('.popup__form');
export const imagePopup = document.querySelector('.popup_type_image');

initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link, deleteCard, likeCard, openImage);
  placesList.append(newCard);
});

editProfileButton.addEventListener('click', function (evt) {
  openModal(editProfilePopup, currentProfileName.textContent, currentProfileJob.textContent);
  formElement.addEventListener('submit', handleFormSubmit);
  document.addEventListener('keydown', escapePopup);    
  editProfilePopup.addEventListener('click', closeModal); 
});

newCardButton.addEventListener('click', (evt) => {
  openModal(newCardPopup, '', '');
  newCardForm.addEventListener('submit', handleCardSubmit);
  document.addEventListener('keydown', escapePopup);
  newCardPopup.addEventListener('click', closeModal );
})


import '../pages/index.css';

