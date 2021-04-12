'use strict';

document.querySelector('.header__burgermenu')
  .addEventListener('click', function() {
    document.querySelector('.burgermenu-icon').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('animate');
    document.querySelector('.header__top').classList.toggle('top-active');
  });
