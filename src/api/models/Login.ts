import { RequestAPI } from '../core'

export default function login(params: { email: string, password: string, device_token: string }) {
    return RequestAPI({
        route: '/login',
        method: 'POST',
        params
    })
}