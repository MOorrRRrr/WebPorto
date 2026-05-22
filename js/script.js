// //toggle class active
// const navbarNav = document.querySelector

// SHOW MENU
const showMenu = (navId, toggleId) => {
   const nav = document.getElementById(navId),
         toggle = document.getElementById(toggleId)

   toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('show-icon')
   })
}
showMenu('nav-menu','nav-toggle')