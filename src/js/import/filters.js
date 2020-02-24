(function () {
  if (document.querySelector('.js-filters-open')) {
    document.querySelector('.js-filters-open').addEventListener('click', () => {
      document.querySelector('.js-sidebar').classList.add('active');
    });
  }
  if (document.querySelector('.js-filters-close')) {
    document.querySelector('.js-filters-close').addEventListener('click', () => {
      document.querySelector('.js-sidebar').classList.remove('active');
    });
  }
})();
