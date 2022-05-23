// всплывающий список с подробной информацией о карточке

const cards = document.querySelectorAll('.card-list');

function listOpen(e) {
 //   console.log(e.target)
 //   console.log(this.querySelector('.list'))
    const list = this.querySelector('.list')
    const button = this.querySelector('.card__button-logo')
    const gradient = this.querySelector('.list-gradient')
    list.classList.toggle("list_opened");
    button.classList.toggle("card__button-logo_active")
    gradient.classList.toggle('list-gradient_opened')
}

cards.forEach((card) => {
    card.querySelector('.card').addEventListener('click', listOpen.bind(card))
})

// активные ссылочки и кнопочки в шапке
const navigation = document.querySelectorAll('.navigation__link')

navigation.forEach((navigation) => {
    navigation.addEventListener('click', function (evt) {
        evt.target.classList.toggle('navigation__link_active')
    })
});


const headerButtonProfile = document.querySelector('.header__button_profile')

headerButtonProfile.addEventListener('click', function(evt) {
        evt.target.classList.toggle('header__button_profile_active')
})

const LikeButtonProfile = document.querySelector('.header__button_like')

LikeButtonProfile.addEventListener('click', function(evt) {
        evt.target.classList.toggle('header__button_like_active')
})

const BagButtonProfile = document.querySelector('.header__button_bag')

BagButtonProfile.addEventListener('click', function(evt) {
        evt.target.classList.toggle('header__button_bag_active')
})


// закрытие и открытие попапов оплаты

const popups = document.querySelectorAll('.popup');
const popupCloseButton = document.querySelector('.popup_close')

// попап успешной оплаты
popupGoodResult = document.querySelector('.popup__good_js_item');
// попап неудачной оплаты
popupBadResult = document.querySelector('.popup__bad_js_item');



// открытие попапов
const payButton = document.querySelector('.form__button')
payButton.addEventListener('click', function(evt) {
    evt.preventDefault()
    popupBadResult.classList.add('popup_opened')
})



// закрытие попапов
popups.forEach((popup) => {
    const popupCloseButton = popup.querySelector('.popup__close')
    popupCloseButton.addEventListener('click', function() {
        popup.classList.remove('popup_opened')
    })
});


