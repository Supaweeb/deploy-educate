import getConfig from 'next/config'

function getNextRuntimeConfig() {
    console.log(getConfig())
    const { publicRuntimeConfig } = getConfig()
    return publicRuntimeConfig
}

export function getApiUrl() {
    const { API_URL } = getNextRuntimeConfig()
    return API_URL
}
