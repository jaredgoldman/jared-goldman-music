import { request } from './shared.js'

export let sharedData = null

export const fetchCmsData = async () => {
    sharedData = await request('/jg-drums')
}
