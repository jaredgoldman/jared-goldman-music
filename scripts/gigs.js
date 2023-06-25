import { request } from './shared.js'

const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
    }).format(new Date(dateString))
}

/**
 * Fetches gigs from the server and maps to html elements
 */
const mapGigs = async () => {
    const { data: gigs } = await request('/gigs')
    const gigsNode = document.querySelector('.gigs')
    gigs.forEach((gig) => {
        const gigData = gig.attributes
        const gigNode = document.createElement('div')
        gigNode.classList.add('gig')

        const gigHeading = document.createElement('h1')
        gigHeading.innerText = `${gigData.venue} | ${gigData.bandname}`
        gigHeading.innerText = formatDate(gigData.date)
        gigHeading.classList.add('gig-card_heading')

        const gigVenue = document.createElement('h2')
        gigVenue.innerText = gigData.bandname

        const gigSubHeading = document.createElement('p')
        gigSubHeading.classList.add('gig-card_subheading')
        gigSubHeading.innerText = `${gigData.venue} | ${gigData.bandname}`

        const gigDesc = document.createElement('p')
        gigDesc.classList.add('gig-card_desc')
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
