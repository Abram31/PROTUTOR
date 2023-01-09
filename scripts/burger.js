const menu = document.querySelector('.wrapper-links')
const burger = document.querySelector('.burger')
const body = document.querySelector('body')
const footer = body.querySelector('.footer')

const firstLine = burger.querySelector('.burger__first-line')
const secondLine = burger.querySelector('.burger__second-line')
const threeLine = burger.querySelector('.burger__three-line')



burger.addEventListener('click', ()=>{
    body.classList.toggle('body__active')
    footer.classList.toggle('footer__active')
    menu.classList.toggle('wrapper-links__active')
    firstLine.classList.toggle('first-line__active')
    secondLine.classList.toggle('second-line__active')
    threeLine.classList.toggle('three-line__active')

})