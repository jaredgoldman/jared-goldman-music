import { CMS_API_KEY } from './config.js'

const request = async (path) => {
    const token = CMS_API_KEY
    const res = await fetch(`http://localhost:1337/api${path}`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    })
    return await res.json()
}

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

// TODO: Dry this up
const mapGigs = async () => {
    const { data: gigs } = await request('/gigs')
    const gigsNode = document.querySelector('.gigs')
    gigs.forEach((gig) => {
        const gigData = gig.attributes
        const gigNode = document.createElement('div')

        const gigHeading = document.createElement('h1')
        gigHeading.innerText = gigData.venue
        const gigVenue = document.createElement('h2')
        gigVenue.innerText = gigData.bandname
        const gigSubHeading = document.createElement('span')
        gigSubHeading.innerText = formatDate(gigData.date)
        const gigDesc = document.createElement('p')
        gigDesc.innerText = gigData.description

        gigNode.appendChild(gigHeading)
        gigNode.appendChild(gigSubHeading)
        gigNode.appendChild(gigDesc)
        gigsNode.appendChild(gigNode)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    mapGigs()
})
