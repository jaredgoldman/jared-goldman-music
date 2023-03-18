import { request } from './shared.js'

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
    videoNode.appendChild(videoFragment)
}

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
    videoEl.src = attributes.link

    card.appendChild(title)
    card.appendChild(videoEl)
    card.appendChild(description)

    videoFragment.appendChild(card)
}

// //TODO: probably create collections of pictures
// const createPictureComp = ({ attributes }) => {
//     console.log(attributes)
//     const fragment = new DocumentFragment()
// }

document.addEventListener('DOMContentLoaded', () => {
    mapMedia()
})
