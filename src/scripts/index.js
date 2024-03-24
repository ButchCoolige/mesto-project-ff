import { createCard, deleteCard, likeCard} from './card.js'
import { openImage, closePopup, openPopup, handleFormSubmit, profileNameInput, profileJobInput, currentProfileName, currentProfileJob} from './modal.js'  
import { initialCards } from './cards.js'

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const editProfileButton = content.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardPopupForm = document.forms["new-place"];
const placeInput = newCardPopupForm.elements["place-name"]; 
const placeImage = newCardPopupForm.elements.link;
const popups = document.querySelectorAll('.popup');

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
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })

});

function handleCardSubmit(evt) {
  const newCard = createCard(placeInput.value, placeImage.value, deleteCard, likeCard, openImage);
  placesList.prepend(newCard);
  placeInput.value = '';
  placeImage.value = '';
  closePopup(newCardPopup); 
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
  openPopup(newCardPopup);
})

import '../pages/index.css';

