let sublistLink = document.querySelectorAll('.js-sublist');

class sublist {
  constructor(el) {
    this.el = el.parentElement;
    this.sublistBlock = document.querySelector('#catalog-list');
    el.addEventListener('click', (e) => {
      e.preventDefault();
    });
    if (window.innerWidth > 1139) {
      this.el.addEventListener('mouseover', () => {
        this.open();
      });
      this.el.addEventListener('mouseleave', () => {
        this.close();
      });
    } else {
      el.addEventListener('click', (e) => {

        if (this.sublistBlock.style.display === 'block') {
          this.closeMob();
        } else {
          this.openMob();
        }
      });
    }
  }

  open() {
    this.sublistBlock.style.display = 'block';
  }

  openMob() {
    this.sublistBlock.style.position = 'fixed';
    this.sublistBlock.style.display = 'block';
    const height = this.sublistBlock.offsetHeight;
    console.log(height);
    this.sublistBlock.style = '';
    this.sublistBlock.style.transition = 'transform, height .3s ease-out';
    this.sublistBlock.style.display = 'block';
    this.sublistBlock.style.height = '0';
    this.sublistBlock.style.transform = 'scale(0)';
    this.sublistBlock.style.overflow = 'hidden';
    setTimeout(() => {
      this.sublistBlock.style.height = `${height}px`;
      this.sublistBlock.style.transform = 'scale(1)';
    }, 10);
    setTimeout(() => {
      this.sublistBlock.style = '';
      this.sublistBlock.style.display = 'block';
    }, 200);
  }

  close() {
    this.sublistBlock.style = '';
  }

  closeMob() {
    const height = this.sublistBlock.offsetHeight;
    this.sublistBlock.style.height = `${height}px`;
    this.sublistBlock.style.overflow = 'hidden';
    this.sublistBlock.style.transition = 'height .3s ease-out';
    setTimeout(() => {
      this.sublistBlock.style.height = '0';
    }, 50);
    setTimeout(() => {
      this.sublistBlock.style = '';
    }, 200);
  }
}

Array.from(sublistLink).forEach((e) => {
  new sublist(e);
});


document.querySelector('.js-mobMenu').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.js-mobMenu').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
})
