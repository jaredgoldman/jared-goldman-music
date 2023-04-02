import { request, getUrlPathParam } from './shared.js'

const getBandcampEmbeds = async () => {
    const { data } = await request('/albums')
    const embedFragment = new DocumentFragment()
    data.forEach((embedData) => createEmbedCard(embedData, embedFragment))
    const embedNode = document.querySelector('.music-embeds')
    embedNode.appendChild(embedFragment)
}

// TODO: refactor to just return card
const createEmbedCard = ({ attributes }, fragment) => {
    const card = document.createElement('div')
    card.classList.add('music-embed_card')

    const iframe = document.createElement('iframe')
    iframe.src = `https://bandcamp.com/EmbeddedPlayer/album=${attributes.uuid}/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=false/artwork=small/transparent=true`
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

// TODO: optimize this
const resizeEmbed = () => {
    const query = window.matchMedia('(max-width: 450px)')
    const embeds = document.querySelectorAll('.music-embed_iframe')
    query.addEventListener('change', (event) => {
        if (event.matches) {
            embeds.forEach(embed => {
                const albumID = getUrlPathParam(embed.src, 'album')
                embed.src = `https://bandcamp.com/EmbeddedPlayer/album=${albumID}/size=large/bgcol=181a1b/linkcol=056cc4/minimal=true/transparent=true`
                const width = embed.offsetWidth
                const height = width / 16
                embed.style.height = `${height}rem`
            })
        } else {
            embeds.forEach(embed => {
                const albumID = getUrlPathParam(embed.src, 'album')
                embed.src = `https://bandcamp.com/EmbeddedPlayer/album=${albumID}/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=false/artwork=small/transparent=true`
                embed.style.width = '100%'
                embed.style.height = '120px'
            })
        }
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    await getBandcampEmbeds()
    resizeEmbed()
})
