import { request } from './shared.js'

const getBandcampEmbeds = async () => {
    const { data } = await request('/albums')
    console.log('embed data', data)
    const embedFragment = new DocumentFragment()
    data.forEach((embedData) => createEmbedCard(embedData, embedFragment))
    const embedNode = document.querySelector('#music-embeds')
    embedNode.appendChild(embedFragment)
}

const createEmbedCard = ({ attributes }, fragment) => {
    console.log(attributes)
    const card = document.createElement('div')
    card.classList.add('music-embed_container')

    const iframe = document.createElement('iframe')
    iframe.src = attributes.source
    iframe.classList.add('music-embed_iframe')
    iframe.seamless = true

    const titleAnchor = document.createElement('a')
    titleAnchor.href = attributes.link
    titleAnchor.innerText = attributes.title

    iframe.appendChild(titleAnchor)
    card.appendChild(iframe)
    fragment.appendChild(card)
}

document.addEventListener('DOMContentLoaded', () => {
    getBandcampEmbeds()
})
