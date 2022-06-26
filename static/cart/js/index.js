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




// активные ссылки в блоке навигации
const navigation = document.querySelectorAll('.navigation__link')

navigation.forEach((navigation) => {
    navigation.addEventListener('click', function (evt) {
        evt.currentTarget.classList.toggle('navigation__link_active')
    })
});




// активные кнопки в шапке
const headerButtonProfile = document.querySelector('.header__button_profile')

headerButtonProfile.addEventListener('click', function (evt) {
    evt.target.classList.toggle('header__button_profile_active')
})

const LikeButtonProfile = document.querySelector('.header__button_like')

LikeButtonProfile.addEventListener('click', function (evt) {
    evt.target.classList.toggle('header__button_like_active')
})

const BagButtonProfile = document.querySelector('.header__button_bag')

BagButtonProfile.addEventListener('click', function (evt) {
    evt.currentTarget.classList.toggle('header__button_bag_active')
})




// закрытие и открытие попапов оплаты

const popups = document.querySelectorAll('.popup-container');
const popupCloseButton = document.querySelector('.popup_close')

// попап успешной оплаты
popupGoodResult = document.querySelector('.popup__good_js_item');
// попап неудачной оплаты
popupBadResult = document.querySelector('.popup__bad_js_item');



// открытие попапа успешной оплаты
function successfulPay(evt) {
    evt.preventDefault();
    popupGoodResult.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
}

const payButtonSuccess = document.querySelector('.form__button') // кнопка на которую временно навешено открытие попапа удачной оплаты
payButtonSuccess.addEventListener('click', successfulPay)


// открытие попапа неудчаной оплаты
function unSuccessfulPay(evt) {
    evt.preventDefault();
    popupBadResult.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
}

const payButtonFaild = document.querySelector('.card-delete') // кнопка на которую временно навешено открытие попапа неудачной оплаты
payButtonFaild.addEventListener('click', unSuccessfulPay)




// закрытие попапов с результатами оплаты
function closeAllPopups() {
    document.removeEventListener('keydown', closePopupOnEsc);
    popups.forEach((popup) => {
        popup.classList.remove('popup_opened');
        const popupCloseButton = popup.querySelector('.popup__close')
        popupCloseButton.addEventListener('click', function () {
            popup.classList.remove('popup_opened')
        })
    });
}

closeAllPopups();



// попап с шапкой
headerPopup = document.querySelector('.popup-header-container') // попап

// функция открытия попапа с шапкой
function openHeaderPopup(evt) {
    document.addEventListener('keydown', closePopupOnEsc);
    evt.preventDefault();
    headerPopup.classList.add('popup-header_open');
}

const burgerMenu = document.querySelector('.mobile-header__button'); // кнопка на которую навешано открытие попапа с шапкой
burgerMenu.addEventListener('click', openHeaderPopup)

// функция закрытия попапа с шапкой
function closeHeaderPopup() {
    headerPopup.classList.remove('popup-header_open');
    const popupHeaderCloseButton = headerPopup.querySelector('.popup__close_header-popup');
    popupHeaderCloseButton.addEventListener('click', function () {
        headerPopup.classList.remove('popup-header_open')
    })
    document.removeEventListener('keydown', closePopupOnEsc);
};

closeHeaderPopup();


// закртиые всех попапов кликом на esc
function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
        closeAllPopups();
        closeHeaderPopup();
    }
};


// закрытие попапов с результатами оплаты кликом на оверлей
function closePopupOnOverlay() { 
    const popups = document.querySelectorAll('.popup-container'); 
    popups.forEach(popup => { 
        popup.addEventListener('click', (evt) => { 
            if (evt.target.classList.contains('popup_opened')) { 
                closeAllPopups();
            } 
            if (evt.target.classList.contains('popup__close')) { 
                closeAllPopups(); 
            } 
        }); 
    });
}; 
closePopupOnOverlay();

// закрытие попапа с шапкой с кликом на оверлей
function closePopupHeaderOnOverlay() {
    headerPopup.addEventListener('click', (evt) => { 
        if (evt.target.classList.contains('popup-header_open')) { 
            closeHeaderPopup();
        } 
        if (evt.target.classList.contains('popup__close_header-popup')) { 
            closeHeaderPopup();
        } 
    }); 

}
closePopupHeaderOnOverlay()



// активные кнопочки на попапе с шапкой
const navigationMobilePopup = document.querySelectorAll('.popup-header__item')

navigationMobilePopup.forEach((element) => {
    element.addEventListener('click', function (evt) {
        evt.target.classList.toggle('popup-header__item_activ');
        element.querySelector('.popup-header__li').classList.toggle('popup-header__li_activ')
    })
});

