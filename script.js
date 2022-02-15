const menuIconButton = document.querySelector('[data-menu-icon-btn]')
const sideBar = document.querySelector('[data-sidebar]')

menuIconButton.addEventListener('click', () =>{
    sideBar.classList.toggle("open")
    //Open sidebar/close sidebar
})