import { createCard, deleteCard, likeCard/* , renderCard */, placesList, handleCardClick } from './card.js'
import { closePopup, openPopup } from './modal.js'  
import { initialCards } from './cards.js'
import '../pages/index.css'

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardPopupForm = document.forms["new-place"];
const placeInput = newCardPopupForm.elements["place-name"]; 
const placeImage = newCardPopupForm.elements.link;
const popups = document.querySelectorAll('.popup');
const cardOptions = { item: {}, deleteCard, likeCard, handleCardClick };
const editProfileForm = document.forms["edit-profile"];
const profileNameInput = editProfileForm.elements.name;
const profileJobInput = editProfileForm.elements.description; 
const currentProfileName = document.querySelector('.profile__title');
const currentProfileJob = document.querySelector('.profile__description');

editProfileForm.addEventListener('submit', function (evt) {
  evt.preventDefault(); 
  handleProfileFormSubmit(editProfilePopup);
  });

newCardPopupForm.addEventListener('submit', function (evt) {  
  evt.preventDefault(); 
  handleNewCardFormSubmit(newCardPopupForm);
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
function renderCard(item, method = 'apppend') {  
  cardOptions.item = item;
  const newCard = createCard(cardOptions);
  placesList[ method ](newCard);
}

function handleNewCardFormSubmit(form) {
  cardOptions.cardTitle = placeInput.value;
  cardOptions.cardImage = placeImage.value;
  /* const newCard = createCard(cardOptions); */
  renderCard(cardOptions, 'prepend'); 
  form.reset(); 
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
 /* const newCard = createCard(cardOptions); */
  renderCard(cardOptions, 'append');   
});

editProfileButton.addEventListener('click', function (evt) {
  openPopup(editProfilePopup);
  profileNameInput.value = currentProfileName.textContent;
  profileJobInput.value = currentProfileJob.textContent;
});

newCardButton.addEventListener('click', (evt) => {
  openPopup(newCardPopup);
});



