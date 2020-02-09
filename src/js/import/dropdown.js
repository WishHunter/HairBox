(function () {
  const dropdownLinks = document.querySelectorAll('.js-dropdown');

  if (!dropdownLinks) {
    return;
  }

  openDropdawn(document.querySelector('.js-dropdown').parentElement);

  Array.from(dropdownLinks).forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = dropdownLink.parentElement;
      console.log(parent);
      if (parent.classList.contains('open')) {
        closeDropdawn(parent);
      } else {
        openDropdawn(parent);
      }
    });
  });

  function openDropdawn(elem) {
    elem.classList.add('open');
    const  thisBody = elem.querySelector('.dropdawn__body');
    thisBody.style.height = thisBody.scrollHeight + 'px';
  }

  function closeDropdawn(elem) {
    elem.classList.remove('open');
    elem.querySelector('.dropdawn__body').style.height = '';
  }
}());
