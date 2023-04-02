document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const menu = document.querySelector('.menu-full')
    const mainHeader = document.querySelector('main-header')
    menuToggle.addEventListener('click', () => {
        // menu.classList.toggle('active')
        // menuToggle.classList.toggle('hidden')
        mainHeader.classList.toggle('active')
    })

})
