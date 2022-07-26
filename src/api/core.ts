import { Config } from './config'
import File from './models/objects/File'
import AccessToken from './token'

interface RequestConfig {
    route: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    params?: any,
    headers?: any
    token?: boolean
    files?: File[]
}

export async function RequestAPI({ route = '', method = 'GET', params, token = false, files = [] }: RequestConfig) {
    const requestConfig: RequestInit = { method }

    if (token) {
        if (!(await AccessToken.isset())) throw 'Api access token is not setted'
        requestConfig.headers = { 'Authorization': `Bearer ${await AccessToken.get()}` }
    }

    if (files.length > 0) {
        const formData = files.reduce((form, file) => {
            form.append(file.mediaName, file.toFormData())
            return form
        }, new FormData())

        requestConfig.body = formData
    }

    const url = params ?
        `${Config.apiDomain}${route}?${getParamsString(params)}` :
        `${Config.apiDomain}${route}`

    const res = await fetch(url, requestConfig)
    const data = await res.json()

    return {
        data,
        status: res.status
    }
}

function getParamsString(params: any): string {
    if (typeof params !== 'object') return ''
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