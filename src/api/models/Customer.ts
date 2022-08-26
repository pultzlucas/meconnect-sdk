import { RequestAPI } from '../core'
import User from './objects/User'

class CustomerModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/users/customer'
    }

    async create(params: User) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params
        })
    }

    async get(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            token: true
        })
    }

    async getNotifications(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/notifications`,
            method: 'GET',
            token: true
        })
    }

    async getConnections(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/connections`,
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

    async update(id: number, params: any) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'PUT',
            params,
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

export default CustomerModel