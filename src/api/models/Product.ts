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
            params,
            token: true
        })
    }

    async get(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            token: true
        })
    }

    async getByTags(tags: string[]) {
        return RequestAPI({
            route: `${this.endpoint}/bytags`,
            method: 'GET',
            params: {
                tags: tags.join(',')
            },
            token: true
        })
    }

    async getByPrice(price: number) {
        return RequestAPI({
            route: `${this.endpoint}/byprice/${price}`,
            method: 'GET',
            token: true
        })
    }

    async getByDescription(desc: string) {
        return RequestAPI({
            route: `${this.endpoint}/bydesc/${desc}`,
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

export default ProductModel