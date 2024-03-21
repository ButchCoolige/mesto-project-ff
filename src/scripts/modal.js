import {imagePopup, editProfilePopup, newCardPopup, currentProfileName, currentProfileJob} from './index.js'

function openModal(element, inputFirstContent, inputSecondContent) {
    element.classList.toggle('popup_is-opened');
    const elementFirstInput = element.querySelector('.popup__input');
    const elementSecondInput = elementFirstInput.nextElementSibling;
    elementFirstInput.value = inputFirstContent;
    elementSecondInput.value = inputSecondContent;
  }
  
  function closeModal(evt) {  
      if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
        evt.currentTarget.classList.remove('popup_is-opened');
        evt.currentTarget.removeEventListener('click', closeModal);
      }  
  }

  function openImage(event) {
    const currentCard =  event.target.parentNode;
    const cardCaption = currentCard.querySelector('.card__title');
    const imagePopupContent = imagePopup.querySelector('.popup__content_content_image');
    const imagePopupImage = imagePopupContent.querySelector('.popup__image');
    const imagePopupCaption = imagePopupContent.querySelector('.popup__caption');
    imagePopup.classList.toggle('popup_is-opened'); 
    imagePopupImage.src = event.target.src;
    imagePopupCaption.textContent = cardCaption.textContent;
    document.addEventListener('keydown', escapePopup);
    imagePopup.addEventListener('click', closeModal);
  }

  function escapePopup(evt) {  
    if (evt.key === 'Escape') {
    editProfilePopup.classList.remove('popup_is-opened');
    newCardPopup.classList.remove('popup_is-opened');
    imagePopup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escapePopup);}
}

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  const formElement = editProfilePopup.querySelector('.popup__form');
  const nameInput = formElement.querySelector('.popup__input_type_name'); 
  const jobInput = formElement.querySelector('.popup__input_type_description');  
  currentProfileName.textContent = nameInput.value;
  currentProfileJob.textContent = jobInput.value;
  editProfilePopup.classList.remove('popup_is-opened');
  formElement.removeEventListener('submit', handleFormSubmit);
}

export {  openImage, escapePopup, openModal, closeModal, handleFormSubmit};