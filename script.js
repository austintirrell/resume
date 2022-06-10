const header = document.getElementsByTagName('header')[0]
const body = document.getElementsByTagName('body')[0]
const mode = document.getElementById('mode')
const text = document.getElementsByClassName('text')

window.addEventListener('DOMContentLoaded', () => {
  header.classList.toggle('active')
})

/* mode.addEventListener('click', () => {
  mode.classList.toggle('active');
  body.classList.toggle('active');
}) */