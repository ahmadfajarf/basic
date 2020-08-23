const btn = document.querySelector('.btn-1');
const notifBar = document.querySelector('.notification-bar');
btn.addEventListener('click', function() {
  notifBar.style.top = "-500px";
});

const newsLetter = document.getElementsByClassName('newsletter-container')[0];
const span = document.getElementsByTagName('span')[0];
span.addEventListener('click', function() {
  newsLetter.style.bottom = "-500px";
});