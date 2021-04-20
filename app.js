const burger = document.querySelector('.fa-bars');
const hidden = document.querySelector('.hidden');
const exit = document.querySelector('.fa-times');
const links = document.querySelectorAll('.a-leave');

const exitBurger = function (element) {
  hidden.classList.remove('hidden');
};

const openBurger = function (element) {
  hidden.classList.add('hidden');
  hidden.style.display = '';
};

burger.addEventListener('click', exitBurger);

exit.addEventListener('click', openBurger);

links.forEach((elem) =>
  elem.addEventListener('click', () => {
    hidden.classList.add('hidden');
  })
);
