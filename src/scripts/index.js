import { createCard, deleteCard, likeCard, renderCard } from './card.js'
import { closePopup, openPopup } from './modal.js'  
import { initialCards } from './cards.js'

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardPopupForm = document.forms["new-place"];
const placeInput = newCardPopupForm.elements["place-name"]; 
const placeImage = newCardPopupForm.elements.link;
const popups = document.querySelectorAll('.popup');
const cardOptions = { cardTitle: '', cardImage: '', deleteFunction: deleteCard, likeFunction: likeCard, popupFunction: openImage };
const imagePopup = document.querySelector('.popup_type_image');
const editProfileForm = document.forms["edit-profile"];
const profileNameInput = editProfileForm.elements.name;
const profileJobInput = editProfileForm.elements.description; 
const currentProfileName = document.querySelector('.profile__title');
const currentProfileJob = document.querySelector('.profile__description');
const imagePopupContent = imagePopup.querySelector('.popup__content_content_image');
const imagePopupImage = imagePopupContent.querySelector('.popup__image');
const imagePopupCaption = imagePopupContent.querySelector('.popup__caption');

document.addEventListener('submit', function (evt) {
  evt.preventDefault(); 
  if (evt.target.getAttribute('name') === 'edit-profile') {
    handleProfileFormSubmit(editProfilePopup);
  }
  if (evt.target.getAttribute('name') === 'new-place') {
    handleNewCardFormSubmit(newCardPopup);
  }
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
});

function openImage(event) {
  openPopup(imagePopup);
  const currentCard =  event.target.parentNode;
  const cardCaption = currentCard.querySelector('.card__title');       
  imagePopupImage.src = event.target.src;
  imagePopupImage.alt = `Увеличенное изображение ${cardCaption.textContent}`;
  imagePopupCaption.textContent = cardCaption.textContent;
}

function handleNewCardFormSubmit(evt) {
  cardOptions.cardTitle = placeInput.value;
  cardOptions.cardImage = placeImage.value;
  const newCard = createCard(cardOptions);
  renderCard(newCard, 'prepend'); 
  placeInput.value = '';
  placeImage.value = '';
  closePopup(newCardPopup);   
}

function handleProfileFormSubmit(popup) {  
  currentProfileName.textContent = profileNameInput.value;
  currentProfileJob.textContent = profileJobInput.value;
  closePopup(popup);
}

initialCards.forEach(function (item) {
  cardOptions.cardTitle = item.name;
  cardOptions.cardImage = item.link;
  const newCard = createCard(cardOptions);
  renderCard(newCard, 'append');   
});

editProfileButton.addEventListener('click', function (evt) {
  openPopup(editProfilePopup);
  profileNameInput.value = currentProfileName.textContent;
  profileJobInput.value = currentProfileJob.textContent;
});

newCardButton.addEventListener('click', (evt) => {
  openPopup(newCardPopup);
});

import '../pages/index.css';

