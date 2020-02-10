(function () {

  const tabsLogin = document.querySelectorAll('.js-tab-login');

  Array.from(tabsLogin).forEach(tabLogin => {
    tabLogin.addEventListener('click', (e) => {
      e.preventDefault();

      if (tabLogin.classList.contains('disabled')) {
        return;
      }

      const tabBlock = document.querySelector(tabLogin.getAttribute('href'));
      const activeLink = document.querySelector('.login__link.disabled');
      const activeBlock = document.querySelector('.login__content.active');

      activeLink.classList.remove('disabled');
      tabLogin.classList.add('disabled');
      activeBlock.classList.remove('active');
      tabBlock.classList.add('active');
    });
  })

})();
