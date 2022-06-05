import { RequestAPI } from '../core'

class CustomerModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/users/customer'
    }

    async create(params: any) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params
        })
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

    async update(id: number, params: any, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'PUT',
            params,
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

export default CustomerModel