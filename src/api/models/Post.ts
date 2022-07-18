import { RequestAPI } from '../core'

interface Post {
    company_id: number
    title: string
    content: string
    post_type: string
    tags: string[]
}

class PostModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/posts'
    }

    async create(params: Post) {
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

    async getByTitle(title: string, token: string) {
        return RequestAPI({
            route: `${this.endpoint}/bytitle/${title}`,
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

export default PostModel