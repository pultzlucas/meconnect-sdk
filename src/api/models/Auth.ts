import { RequestAPI } from '../core'

export function login(params: { email: string, password: string, device_token: string }) {
    return RequestAPI({
        route: '/login',
        method: 'POST',
        params
    })
}

export function logout(params: { device_token: string }) {
    return RequestAPI({
        route: '/auth/logout',
        method: 'DELETE',
        params,
        token: true,
    })
}