const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// This event listener will be added if the hamburger icon exists.
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// This event listener will be added if the close icon exists,
// making it independent of the hamburger icon.
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}