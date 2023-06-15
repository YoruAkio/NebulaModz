let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

const sr = ScrollReveal({
  distance: '65px',
  duration: 2500,
  delay: 400,
  reset: true,
})

// sr.reveal('.hero-text', { delay: 400, origin: 'top'})
