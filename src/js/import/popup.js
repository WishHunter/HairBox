(function () {

  const openPopupLinks = document.querySelectorAll('.js-openPopup');

  const closePopupLinks = document.querySelectorAll('.js-close-popup');

  Array.from(openPopupLinks).forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();


      if (document.querySelector('.popup.open')) {
        document.querySelector('.popup.open').classList.remove('open');
      }

      const popupBlock = document.querySelector(link.getAttribute('href'));
      popupBlock.classList.add('open');
    });
  });

  Array.from(closePopupLinks).forEach(link => {
    link.addEventListener('click', (e) => {

      if (e.target !== e.currentTarget) {
        return;
      }

      const popupBlock = document.querySelector(link.dataset.popup);
      popupBlock.classList.remove('open');


    });
  });

})();
