import { RequestAPI } from '../core'

class NotificationModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/notifications'
    }

    async get(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            token: true
        })
    }

    async all() {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            token: true
        })
    }

    async delete(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'DELETE',
            token: true
        })
    }
}

export default NotificationModel