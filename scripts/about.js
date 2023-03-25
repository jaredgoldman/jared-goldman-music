import { request } from "./shared.js";

const loadContent = async () => {
    const { data: { attributes: { bio } } } = await request('/about')
    const bioNode = document.querySelector('.bio')
    console.log(bioNode)
    const bioParagraph = document.createElement('p')
    bioParagraph.textContent = bio
    bioParagraph.classList.add('about_content')
    bioNode.appendChild(bioParagraph)
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent()
})
