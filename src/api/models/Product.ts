import { RequestAPI } from '../core'

interface Product {
    company_id: number
    price: number
    description: string
    img_url: string
    tags: string[]
}

class ProductModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/products'
    }

    async create(params: Product) {
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

    async getByPrice(price: number, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/byprice/${price}`,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

    async getByDescription(desc: string, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/bydesc/${desc}`,
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

export default ProductModel