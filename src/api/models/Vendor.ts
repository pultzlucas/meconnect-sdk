import { RequestAPI } from '../core'
import Vendor from './objects/Vendor'

class VendorModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/users/vendor'
    }

    static allUsers(token: string) {
        return RequestAPI({
            route: '/users',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

    async create(params: Vendor) {
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

    async getByTags(tags: string[], token: string) {
        return RequestAPI({
            route: `${this.endpoint}/bytags`,
            method: 'GET',
            headers: {
                'Authorization': token
            },
            params: {
                tags: tags.join(',')
            }
        })
    }

    async getByCommercial(comm: number, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycomm/${comm}`,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

    async getByCep(cep: string, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycep/${cep}`,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

    async getByCnpj(cnpj: string, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycnpj/${cnpj}`,
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

export default VendorModel