/* const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const card = placesList.querySelector('.card');
const addButton = content.querySelector('.profile__add-button'); // непонятно, как добавляются карточки. Пока написал так
// нужна ли эта константа здесь?   const deleteButton = card.querySelector('.card__delete-button'); 

function addCard(cardTitle, cardImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElement.querySelector('.card__image').textContent = cardImage; 
    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('.card__like-button_is-active ');
    })
    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
      
    }
  );
   
    placesList.append(cardElement);
  }
  // не описан объект addButton !!!!!!
  addButton.addEventListener('click', function(event) {
    console.log('Произошло событие', event.type);
    const title = document.querySelector('.popup__input_type_card-name');
    const imageLink = document.querySelector('.popup__input_type_url');
  
    addCard(title.value, imageLink.value);
     
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
  }); */
  
// @todo: Вывести карточки на страницу


/* 
  initialCards.forEach(function (item) {
    addCard(item.name, item.link);
});
 */
 
