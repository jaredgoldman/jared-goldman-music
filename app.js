// Need to fetch gigs and possibly images/videos from cms
// Then create html elements and map them into the gigs element
const request = async (path) => {
    const token =
        '20ce89b90e40cf105abb1367296ef57206f7f5f628cdb377b6296236a1bdfcf0946fefde3ffd1387266601ff5b427e70271b82d581b7097224538fa1c6680dcfb8090bb17a36dc411eb42fd38f63d856f2c5cc23c032f0ad311af1e92370bc8f428e9e92142d841b148219b6b5a6f28a19340397cc9cb7e6a59277674f5019b2'
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

const mapGigs = async () => {
    const { data: gigs } = await request('/gigs')
    const gigsNode = document.querySelector('.gigs')
    console.log(gigs)
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
