let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

function showPopup() {
  var popup = document.getElementById('popup')
  popup.style.display = 'block'
}

function hidePopup() {
  var popup = document.getElementById('popup')
  popup.style.display = 'none'
}
