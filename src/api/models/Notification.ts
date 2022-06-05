import { RequestAPI } from '../core'

class NotificationModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/notifications'
    }

    async get(id: number, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

    async all(token: string) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            headers: {
                'Authorization': token
            }
        })
    }

    async delete(id: number, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        })
    }
}

export default NotificationModel