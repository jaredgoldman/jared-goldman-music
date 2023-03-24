import { request } from './shared.js'

const loadFeaturedContent = async () => {
    const { data } = await request('/featureds?populate=*')
    const { album, media_item } = data[0].attributes
    const albumCard = createFeaturedEmbedCard(album.data)
    const videoCard = createFeaturedVideoCard(media_item.data)
    const featuredAlbumNode = document.querySelector('.home-featured_album')
    const featuredVideoNode = document.querySelector('.home-featured_video')
    featuredAlbumNode.appendChild(albumCard)
    featuredVideoNode.appendChild(videoCard)
}

const createFeaturedEmbedCard = ({ attributes }) => {
    const card = document.createElement('div')
    card.classList.add('music-embed_card')

    const iframe = document.createElement('iframe')
    iframe.src = attributes.source_small
    iframe.seamless
    iframe.classList.add('featured-album_iframe')

    const title = document.createElement('h2')
    title.href = attributes.link
    title.innerText = `${attributes.title} - ${attributes.artist}`
    title.classList.add('music-embed_album-title')

    iframe.appendChild(title)
    card.appendChild(title)
    card.appendChild(iframe)
    return card
}

const createFeaturedVideoCard = ({ attributes }) => {
    const card = document.createElement('div')
    card.classList.add('featured-video_iframe')

    const title = document.createElement('h3')
    title.textContent = attributes.title
    title.classList.add('video-heading')

    const videoEl = document.createElement('iframe')
    videoEl.classList.add('featured-video_video')
    videoEl.src = attributes.link

    card.appendChild(title)
    card.appendChild(videoEl)

    return card
}

document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedContent()
})