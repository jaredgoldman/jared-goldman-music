const head = document.head

const metaTags = [
    {
        property: 'og:title',
        content: 'Jared Goldman | Professional Jazz Drummer',
    },
    {
        property: 'og:description',
        content:
            "Welcome to my jazz drumming website! I am a passionate drummer with a deep love for jazz music. Explore my rhythmic journey, listen to my recordings, and discover the art of jazz drumming. Join me in the world of swing, improvisation, and groove. Let's embrace the language of jazz together.",
    },
    {
        property: 'og:image',
        content: 'http://jaredgoldmandrums.com/assets/images/screenshot.png',
    },
    { property: 'og:url', content: 'https://jaredgoldmandrums.com' },
]

metaTags.forEach(function (tag) {
    var meta = document.createElement('meta')
    meta.setAttribute('property', tag.property)
    meta.setAttribute('content', tag.content)
    head.appendChild(meta)
})
