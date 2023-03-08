// Need to fetch gigs and possibly images/videos from cms
// Then create html elements and map them into the gigs element
const exampleGig = {
    venue: 'Example venue',
    bandName: 'Jared Goldman Trio',
    datetime: Date.now(),
    description: 'description',
}

const createFakeApiCall = () => {
    const gigs = []
    for (let i = 0; i < 10; i++) {
        gigs.push(exampleGig)
    }
    return gigs
}
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

const mapGigs = () => {
    const gigs = createFakeApiCall()
    const gigsNode = document.querySelector('.gigs')
    gigs.forEach((gig) => {
        const gigNode = document.createElement('div')

        const gigHeading = document.createElement('h1')
        gigHeading.innerText = gig.venue
        const gigSubHeading = document.createElement('span')
        gigSubHeading.innerText = formatDate(gig.datetime)
        const gigDesc = document.createElement('p')
        gigDesc.innerText = gig.description

        gigNode.appendChild(gigHeading)
        gigNode.appendChild(gigSubHeading)
        gigNode.appendChild(gigDesc)
        gigsNode.appendChild(gigNode)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    mapGigs()
})
