import { request } from './shared.js'
import { API_URL } from '../config.js'

const mapMedia = async () => {
    const { data } = await request('/media-items?populate=*')
    const videos = []
    const pictures = []
    data.forEach((item) => {
        if (item.attributes.type === 'video') videos.push(item)
        else pictures.push(item)
    })

    const videoFragment = new DocumentFragment()
    videos.forEach((video) => createVideoComp(video, videoFragment))

    const videoNode = document.querySelector('.videos')
    videoNode.appendChild(videoFragment);

    const pictureFragment = new DocumentFragment()
    pictures.forEach((picture) => createPictureComp(picture, pictureFragment))

    const pictureNode = document.querySelector('.pictures')
    pictureNode.appendChild(pictureFragment);
}

// TODO: refactor to just return card
const createVideoComp = ({ attributes }, videoFragment) => {
    const card = document.createElement('div')
    card.classList.add('video-container')

    const title = document.createElement('h3')
    title.textContent = attributes.title
    title.classList.add('video-heading')

    const description = document.createElement('p')
    description.textContent = attributes.description
    description.classList.add('video-desc')

    const videoEl = document.createElement('iframe')
    videoEl.classList.add('video-video')
    videoEl.src = `https://www.youtube.com/embed/${attributes.yt_id}`

    card.appendChild(title)
    card.appendChild(videoEl)
    card.appendChild(description)

    videoFragment.appendChild(card)
}

// //TODO: probably create collections of pictures
const createPictureComp = ({ attributes }, pictureFragment) => {
    const { image: { data } } = attributes
    data.forEach(({ attributes }) => {
        const path = `${API_URL}${attributes.url}`

        const card = document.createElement('div')
        card.classList.add('picture-container')

        const downloadEl = document.createElement('a')
        downloadEl.download = attributes.name
        downloadEl.href = path

        const photoEl = document.createElement('img')
        photoEl.src = path
        photoEl.classList.add('picture-picture')

        downloadEl.appendChild(photoEl)
        card.appendChild(downloadEl)

        pictureFragment.appendChild(card)
    })

}

document.addEventListener('DOMContentLoaded', () => {
    mapMedia()
})
