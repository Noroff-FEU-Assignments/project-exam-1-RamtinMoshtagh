const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrollHeader);
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');
const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme) {
    body.classList.add('light-theme');
}
themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
          slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }   
});
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");
nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
subjectInput.isValid = () =>!!subjectInput.value;
messageInput.isValid = () => !!messageInput.value;
let shouldValidate = false;
let isFormValid = false;
const validateInputs = () => {
  if (!shouldValidate) return;
  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");
    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    shouldValidate = true;
    validateInputs();
    if (isFormValid) {
    }
  });
  inputFields.forEach((input) => input.addEventListener("input", validateInputs));