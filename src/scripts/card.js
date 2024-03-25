import { openPopup } from "./modal";

const cardTemplate = document.querySelector('#card-template').content;
const blankCard = cardTemplate.querySelector('.card');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupContent = imagePopup.querySelector('.popup__content_content_image');
const imagePopupImage = imagePopupContent.querySelector('.popup__image');
const imagePopupCaption = imagePopupContent.querySelector('.popup__caption');

function createCard(options) {  
  const cardElement = blankCard.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');
  const cardElementTitle = cardElement.querySelector('.card__title');

  cardElementTitle.textContent = options.item.name;
  cardElementImage.src = options.item.link;
  cardElementImage.alt = `Красивый вид ${options.cardTitle}`;
  cardElement.querySelector('.card__delete-button').addEventListener('click', options.deleteCard);
  cardElement.querySelector('.card__like-button').addEventListener('click', options.likeCard);
  cardElementImage.addEventListener('click', () => handleCardClick(cardElementTitle, cardElementImage));
  return(cardElement);
}

function handleCardClick(cardTitle, cardImage) {
  openPopup(imagePopup);
  imagePopupImage.src = cardImage.src;
  imagePopupImage.alt = `Увеличенное изображение ${cardTitle.textContent}`;
  imagePopupCaption.textContent = cardTitle.textContent;
}

function deleteCard(event) {
  const cardItem = event.target.closest('.card');
  cardItem.remove();
}
  
function likeCard(event) {
  const cardLikeButton = event.target;
  cardLikeButton.classList.toggle('card__like-button_is-active');
}
   
export { createCard, deleteCard, likeCard, handleCardClick };