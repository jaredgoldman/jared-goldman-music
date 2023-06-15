import { request } from './shared.js'

const submitContactMessage = () => {
    const form = document.getElementById('contact')
    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const successBadge = document.querySelector('.home-contact-form_success')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const name = nameInput.value
        const email = emailInput.value
        const message = messageInput.value
        const res = await request('/contact', 'POST', { name, email, message })
        if (res.accepted.length) {
            console.log('message sent')
            successBadge.classList.add('home-contact-form_success-active')
        } else {
            // display error badge
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    submitContactMessage()
})
