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
        const referrer = 'music'
        const res = await request('/contact', 'POST', {
            name,
            email,
            message,
            referrer,
        })
        console.log(res)
        if (res.accepted.length) {
            successBadge.classList.add('home-contact-form_success-active')
            setTimeout(() => {
                successBadge.classList.remove(
                    'home-contact-form_success-active'
                )
            }, 3000)
        } else {
            // display error badge
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    submitContactMessage()
})
