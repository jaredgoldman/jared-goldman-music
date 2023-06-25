/**
 * Menu toggle functionality for mobile view
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const mainHeader = document.querySelector('main-header')
    menuToggle.addEventListener('click', () => {
        mainHeader.classList.toggle('active')
    })
})
