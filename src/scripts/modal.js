const imagePopup = document.querySelector('.popup_type_image');
const editProfileForm = document.forms["edit-profile"];
const profileNameInput = editProfileForm.elements.name;
const profileJobInput = editProfileForm.elements.description; 
const currentProfileName = document.querySelector('.profile__title');
const currentProfileJob = document.querySelector('.profile__description');

  function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscape);
  }
 
  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscape);
  }

  function openImage(event) {
    openPopup(imagePopup);
    const currentCard =  event.target.parentNode;
    const cardCaption = currentCard.querySelector('.card__title');
    const imagePopupContent = imagePopup.querySelector('.popup__content_content_image');
    const imagePopupImage = imagePopupContent.querySelector('.popup__image');
    const imagePopupCaption = imagePopupContent.querySelector('.popup__caption');
    imagePopupImage.src = event.target.src;
    imagePopupImage.alt = `Увеличенное изображение ${cardCaption.textContent}`;
    imagePopupCaption.textContent = cardCaption.textContent;
  }
 
function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

function handleFormSubmit(popup) {
  console.log('Запущена handleFormSubmit');
  currentProfileName.textContent = profileNameInput.value;
  currentProfileJob.textContent = profileJobInput.value;
  closePopup(popup);
}

export {  openImage, handleEscape, openPopup, closePopup, handleFormSubmit, profileNameInput, profileJobInput, currentProfileName, currentProfileJob};