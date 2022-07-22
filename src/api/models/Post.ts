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

    async getByTitle(title: string) {
        return RequestAPI({
            route: `${this.endpoint}/bytitle/${title}`,
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

export default PostModel