import { API_TOKEN, API_URL } from '../config.js'

const request = async (path, method = 'GET', data = null) => {
    const body = method !== 'GET' && data ? JSON.stringify(data) : null
    const res = await fetch(`${API_URL}/api${path}`, {
        headers: {
            Authorization: `bearer ${API_TOKEN}`,
        },
        method,
        body,
    })
    return await res.json()
}

const getUrlPathParam = (fullUrl, searchKey) => {
    const segments = fullUrl.split('/')
    for (const segment of segments) {
        const kv = segment.split('=')
        if (kv[0] === searchKey) {
            return kv[1]
        }
    }
}

export { request, getUrlPathParam }
