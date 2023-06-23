import { request } from './shared.js'

const loadContent = async () => {
    const { data: featuredContent } = await request('/featureds?populate=*')
    const {
        data: {
            attributes: { text },
        },
    } = await request('/music-hero-bio')
    const { album, media_item } = featuredContent[0].attributes
    const albumCard = createFeaturedEmbedCard(album.data)
    const videoCard = createFeaturedVideoCard(media_item.data)
    const featuredAlbumNode = document.querySelector('.home-featured_album')
    const featuredVideoNode = document.querySelector('.home-featured_video')
    featuredAlbumNode.appendChild(albumCard)
    featuredVideoNode.appendChild(videoCard)

    // add mussic hero bio
    const musicHero = document.querySelector('.home-bio')
    const musicHeroBio = document.createElement('p')
    musicHeroBio.innerHTML = text
    musicHeroBio.classList.add('home-bio_content')
    musicHero.appendChild(musicHeroBio)
}

const createFeaturedEmbedCard = ({ attributes }) => {
    const card = document.createElement('div')
    card.classList.add('music-embed_card')

    const iframe = document.createElement('iframe')
    iframe.src = attributes.source_small
    iframe.src = `https://bandcamp.com/EmbeddedPlayer/album=${attributes.uuid}/size=large/bgcol=181a1b/linkcol=056cc4/minimal=true/transparent=true`
    iframe.seamless
    iframe.classList.add('featured-album_iframe')

    card.appendChild(iframe)
    return card
}

const createFeaturedVideoCard = ({ attributes }) => {
    const card = document.createElement('div')
    card.classList.add('featured-video_iframe')

    const videoEl = document.createElement('iframe')
    videoEl.classList.add('featured-video_video')
    videoEl.src = `https://www.youtube.com/embed/${attributes.yt_id}`

    card.appendChild(videoEl)

    return card
}

const sizeFeaturedAlbum = () => {
    const albumNode = document.querySelector('.featured-album_iframe')
    const width = albumNode.offsetWidth
    const height = width / 16
    albumNode.style.height = `${height}rem`
}
document.addEventListener('DOMContentLoaded', () => {
    loadContent()
    sizeFeaturedAlbum()
})
