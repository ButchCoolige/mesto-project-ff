
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

function handleFormSubmit(evt) {
    evt.preventDefault(); 
   // console.log("Поменяем данные профиля");
    currentProfileName.textContent = nameInput.value;
    currentProfileJob.textContent = jobInput.value;
    editProfilePopup.classList.remove('popup_is-opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 



function createCard(cardTitle, cardImage, deleteFunction) {
  
  const cardElement = blankCard.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image')

  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElementImage.src = cardImage;
  cardElementImage.alt = `Красивый вид ${cardTitle}`;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteFunction);

  return(cardElement);
}

function deleteCard(event) {
  const cardItem = event.target.closest('.card');
  console.log(cardItem.name);
  cardItem.remove();
}

initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link, deleteCard);
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
    const newCard = createCard(placeInput.value, placeImage.value, deleteCard);
  placesList.prepend(newCard);
}

newCardForm.addEventListener('submit', handleCardSubmit);

