class Tabs {
  constructor(block) {
    this.block = block;
    this.links = block.querySelectorAll('.js-tab-link');
    Array.from(this.links).forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.openContent(link);
      });
    });
  }
  openContent(link) {
    const content = this.block.querySelector(link.getAttribute('href'));
    let activeElems = this.block.querySelectorAll('.open');

    if (activeElems) {
      Array.from(activeElems).forEach(activeElem => {
        activeElem.classList.remove('open');
      });
    }

    link.classList.add('open');
    content.classList.add('open');
  }
}


if (document.querySelector('.js-tab-block')) {
  const blocks = document.querySelectorAll('.js-tab-block');
  Array.from(blocks).forEach(block => {
    new Tabs(block);
  })
}
