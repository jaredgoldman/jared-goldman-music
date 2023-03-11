import { request } from './shared.js'

const submitContactMessage = () => {
    const form = document.getElementById('contact')
    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const name = nameInput.value
        const email = emailInput.value
        const message = messageInput.value
        console.log(`contact info: ${name}, ${email}, ${message}`)
        const res = await request('/contact', 'POST', { name, email, message })
        if (res.accepted[0] === email) {
            // display success badge
        } else {
            // display error badge
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    submitContactMessage()
})
