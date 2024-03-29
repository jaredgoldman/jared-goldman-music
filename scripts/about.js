import { request } from './shared.js'

const loadContent = async () => {
    const {
        data: {
            attributes: { bio },
        },
    } = await request('/bio')
    const bioNode = document.querySelector('.bio')
    const bioParagraph = document.createElement('p')
    bioParagraph.innerHTML = bio
    bioParagraph.classList.add('about_content')
    bioNode.appendChild(bioParagraph)
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent()
})
