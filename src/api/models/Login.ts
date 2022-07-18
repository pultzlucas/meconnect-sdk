import { RequestAPI } from '../core'

export default function login(name: string, email: string, password: string) {
    return RequestAPI({
        route: '/login',
        method: 'POST',
        params: { name, email, password }
    })
}