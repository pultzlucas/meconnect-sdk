import { RequestAPI } from '../core'
import User from './objects/User'

class CustomerModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/users/customer'
    }

    create(params: User) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params
        })
    }

    get(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            token: true
        })
    }

    getNotifications(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/notifications`,
            method: 'GET',
            token: true
        })
    }

    getUnseenNotifications(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/notifications/unseen`,
            method: 'GET',
            token: true
        })
    }

    getConnections(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/connections`,
            method: 'GET',
            token: true
        })
    }

    all() {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            token: true
        })
    }

    update(id: number, params: any) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'PUT',
            params,
            token: true
        })
    }

    cleanUnseenNotifications(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/notifications/unseen`,
            method: 'PUT',
            token: true
        })
    }

    delete(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'DELETE',
            token: true
        })
    }
}

export default CustomerModel