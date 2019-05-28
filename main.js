window.onfocus = (e => console.log(e));

const q = q => document.querySelector(q);

const searchLoader = () => {
  q('.search').focus();
  q('.app').addEventListener('click', () => {
    q('.search').focus();
  })
}

const menuLoader = () => {
  q('#menu').addEventListener('click', () => {
    q('#menu').classList.toggle('open');
    q('.settings').classList.toggle('open');
    q('.app').classList.toggle('background');
  })
}

window.onload = () => {
  menuLoader();
  searchLoader();
}