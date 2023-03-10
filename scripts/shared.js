import { CMS_API_KEY, API_URL } from '../config.js'

const request = async (path, method = 'GET', data = null) => {
    const body = method !== 'GET' && data ? JSON.stringify(data) : null
    const res = await fetch(`${API_URL}${path}`, {
        headers: {
            Authorization: `bearer ${CMS_API_KEY}`,
        },
        method,
        body,
    })
    return await res.json()
}

export { request }
