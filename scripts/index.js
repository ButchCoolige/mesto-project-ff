
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const blankCard = cardTemplate.querySelector('.card');

// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const editProfileButton = content.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const formElement = editProfilePopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name'); 
const jobInput = formElement.querySelector('.popup__input_type_description'); 
const currentProfileName = document.querySelector('.profile__title');
const currentProfileJob = document.querySelector('.profile__description');
const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardForm = newCardPopup.querySelector('.popup__form');
const placeInput = newCardForm.querySelector('.popup__input_type_card-name'); 
const placeImage = newCardForm.querySelector('.popup__input_type_url');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupContent = imagePopup.querySelector('.popup__content_content_image');
const imagePopupImage = imagePopupContent.querySelector('.popup__image');
const imagePopupCaption = imagePopupContent.querySelector('.popup__caption');

function handleFormSubmit(evt) {
    evt.preventDefault();    
    currentProfileName.textContent = nameInput.value;
    currentProfileJob.textContent = jobInput.value;
    editProfilePopup.classList.remove('popup_is-opened');
}

formElement.addEventListener('submit', handleFormSubmit); 

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

function popupImage(event) {
  const currentCard =  event.target.parentNode;
  const cardCaption = currentCard.querySelector('.card__title');
  imagePopup.classList.toggle('popup_is-opened'); 
  imagePopupImage.src = event.target.src;
  imagePopupCaption.textContent = cardCaption.textContent;
  document.addEventListener('keydown', escapePopup);
  imagePopup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
      console.log('Закрытие попапа' + evt.target)
      imagePopup.classList.remove('popup_is-opened');
    }
  });
}

initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link, deleteCard, likeCard, popupImage);
  placesList.append(newCard);
});

function escapePopup(evt) {
  console.log(evt.key);
    if (evt.key === 'Escape') {editProfilePopup.classList.remove('popup_is-opened');
    newCardPopup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escapePopup);}
}

editProfileButton.addEventListener('click', (evt) => {
  editProfilePopup.classList.toggle('popup_is-opened');
  nameInput.value = currentProfileName.textContent;
  jobInput.value = currentProfileJob.textContent;
  document.addEventListener('keydown', escapePopup);  
   
  editProfilePopup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
      console.log('Закрытие попапа' + evt.target)
      editProfilePopup.classList.remove('popup_is-opened');
    }
  });
 
});

newCardButton.addEventListener('click', (evt) => {
  newCardPopup.classList.toggle('popup_is-opened');
  document.addEventListener('keydown', escapePopup);

  newCardPopup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
      console.log('Закрытие попапа' + evt.target)
      newCardPopup.classList.remove('popup_is-opened');
    }
  });
})

function handleCardSubmit(evt) {
  evt.preventDefault(); 
    console.log("Создаём новую карточку");     
    newCardPopup.classList.remove('popup_is-opened');
    const newCard = createCard(placeInput.value, placeImage.value, deleteCard, likeCard, popupImage);
  placesList.prepend(newCard);
}

newCardForm.addEventListener('submit', handleCardSubmit);

