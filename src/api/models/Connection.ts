import { RequestAPI } from '../core'

interface Connection {
    company_id: number
    client_id: number
}

class ConnectionModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/connections'
    }

    async create(params: Connection) {
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

export default ConnectionModel