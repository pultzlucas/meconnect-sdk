import config from './config'

interface RequestConfig {
    route: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    params?: any,
    headers?: any
}

export async function RequestAPI({ route = '', method = 'GET', params }: RequestConfig) {
    const url = `${config.baseURL}${route}?${getParamsString(params)}`
    const res = await fetch(url, { method })
    const data = await res.json()
    return {
        data,
        status: res.status
    }
}

function getParamsString(params: any): string {
    return Object.keys(params)
        .map(key => {
            let param = params[key]
            if (Array.isArray(param)) {
                param = param.join(',')
            }
            return [key, param]
        })
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
}