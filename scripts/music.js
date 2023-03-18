import { request } from './shared.js'

const getBandcampEmbeds = async () => {
    const { data } = await request('/albums')
    console.log('embed data', data)
    const embedFragment = new DocumentFragment()
    data.forEach((embedData) => createEmbedCard(embedData, embedFragment))
    const embedNode = document.querySelector('.music-embeds')
    embedNode.appendChild(embedFragment)
}

const createEmbedCard = ({ attributes }, fragment) => {
    console.log(attributes)
    const card = document.createElement('div')
    card.classList.add('music-embed_card')

    const iframe = document.createElement('iframe')
    iframe.src = attributes.source
    iframe.seamless
    iframe.classList.add('music-embed_iframe')

    const title = document.createElement('h2')
    title.href = attributes.link
    title.innerText = `${attributes.title} - ${attributes.artist}`
    title.classList.add('music-embed_album-title')

    iframe.appendChild(title)
    card.appendChild(title)
    card.appendChild(iframe)
    fragment.appendChild(card)
}

document.addEventListener('DOMContentLoaded', () => {
    getBandcampEmbeds()
})
