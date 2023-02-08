const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    } else{
        headerElement.classList.remove('activated');
    }
};
window.addEventListener('scroll', scrollHeader);
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};
menuToggleIcon.addEventListener('click', toggleMenu);
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');
formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
window.addEventListener('keyup', event => {
    if(event.key ==='Esacape') searchFormContainer.classList.remove('activated');
});
const swiper = new Swiper(".swiper",{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination: {
        el:".swiper-pagination"
    },
    breakpoints:{
        700: {
            slidesPerView: 2  
        },
        1200: {
            slidesPerView: 3  
        }

    }
});