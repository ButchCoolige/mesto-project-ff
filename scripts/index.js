const content = document.querySelector('.content');
const places = content.querySelector('.places');
const card = places.querySelector('.card');
// непонятно, как добавляются карточки    const addButton = content.querySelector('')
const deleteButtonButton = card.querySelector('.card__delete-button');

function addCard(cardTitle, cardImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElement.querySelector('.card__image').textContent = cardImage; 
    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
     
      evt.target.classList.toggle('card__like_active');
  });
   
    places.append(cardElement);
  }
  // не описан объект addButton !!!!!!
  addButton.addEventListener('click', function () {
    const title = document.querySelector('.popup__input_type_card-name');
    const imageLink = document.querySelector('.popup__input_type_url');
  
    addSong(title.value, imageLink.value);
     
    title.value = '';
    imageLink.value = '';
  });
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки
deleteButton.addEventListener('click', function () {
    const songs = document.querySelectorAll('.song')
  
    for (let i = 0; i < songs.length; i++) {
      songs[i].remove();
    }
  
    renderNoSongs();
  });
  
// @todo: Вывести карточки на страницу

function initialAddCards() {

}
