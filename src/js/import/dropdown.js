(function () {

  if (document.querySelector('.js-dropdown-mobile') && window.innerWidth < 769) {
    Array.from(document.querySelectorAll('.js-dropdown-mobile')).forEach(link => {
      link.classList.remove('js-dropdown-mobile');
      link.classList.add('js-dropdown');
    })
  }

  if (!document.querySelector('.js-dropdown')) {
    return;
  }

  const dropdownLinks = document.querySelectorAll('.js-dropdown');

  opendropdown(document.querySelector('.js-dropdown').parentElement);

  Array.from(dropdownLinks).forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = dropdownLink.parentElement;
      if (parent.classList.contains('open')) {
        closedropdown(parent);
      } else {
        opendropdown(parent);
      }
    });
  });

  function opendropdown(elem) {
    elem.classList.add('open');
    const thisBody = elem.querySelector('.js-dropdown__body');
    thisBody.style.height = thisBody.scrollHeight + 'px';
  }

  function closedropdown(elem) {
    elem.classList.remove('open');
    elem.querySelector('.js-dropdown__body').style.height = '';
  }
}());
