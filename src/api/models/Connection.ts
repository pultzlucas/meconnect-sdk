import { RequestAPI } from '../core'

interface Connection {
    customer_id: number
    vendor_id: number
}

class ConnectionModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/connections'
    }

    async connect(params: Connection) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            token: true,
            params
        })
    }
    
    async disconnect(params: Connection) {
        return RequestAPI({
            route: this.endpoint,
            method: 'DELETE',
            token: true,
            params
        })
    }

    async isConnected(customerId: number, vendorId: number) {
        return RequestAPI({
            route: `${this.endpoint}/connected`,
            method: 'GET',
            token: true,
            params: {
                customer_id: customerId,
                vendor_id: vendorId
            }
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
}

export default ConnectionModel