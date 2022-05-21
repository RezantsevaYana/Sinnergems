// всплывающий список с подробной информацией о карточке

const cards = document.querySelectorAll('.card-list');

function popupOpen(e) {
 //   console.log(e.target)
 //   console.log(this.querySelector('.list'))
    const list = this.querySelector('.list')
    const button = this.querySelector('.card__button-logo')
    list.classList.toggle("list_opened");
    button.classList.toggle("card__button-logo_active")

    /*
    if (list.classList.contains('list_opened')) {
        list.classList.remove("list_opened");
        button.classList.remove("card__button-logo_active")

    } else {
        list.classList.add("list_opened");
        button.classList.add("card__button-logo_active")

    }
    */
}

cards.forEach((card) => {
    card.querySelector('.card').addEventListener('click', popupOpen.bind(card))
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




