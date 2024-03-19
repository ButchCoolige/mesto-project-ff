import { createCard, deleteCard, likeCard } from './card.js'
import {  openImage, escapePopup, openModal, closeModal} from './modal.js'   //handleFormSubmit,

const cardTemplate = document.querySelector('#card-template').content;
export const blankCard = cardTemplate.querySelector('.card');
const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const editProfileButton = content.querySelector('.profile__edit-button');
export const editProfilePopup = document.querySelector('.popup_type_edit');
const formElement = editProfilePopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name'); 
const jobInput = formElement.querySelector('.popup__input_type_description'); 
const currentProfileName = document.querySelector('.profile__title');
const currentProfileJob = document.querySelector('.profile__description');
const newCardButton = document.querySelector('.profile__add-button');
export const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardForm = newCardPopup.querySelector('.popup__form');
const placeInput = newCardForm.querySelector('.popup__input_type_card-name'); 
const placeImage = newCardForm.querySelector('.popup__input_type_url');
export const imagePopup = document.querySelector('.popup_type_image');

function handleFormSubmit(evt) {
    evt.preventDefault();    
    currentProfileName.textContent = nameInput.value;
    currentProfileJob.textContent = jobInput.value;
    editProfilePopup.classList.remove('popup_is-opened');
    formElement.removeEventListener('submit', handleFormSubmit);
}

function handleCardSubmit(evt) {
  evt.preventDefault();        
  newCardPopup.classList.remove('popup_is-opened');
  const newCard = createCard(placeInput.value, placeImage.value, deleteCard, likeCard, openImage);
  placesList.prepend(newCard);
  newCardForm.removeEventListener('submit', handleCardSubmit);
}

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



