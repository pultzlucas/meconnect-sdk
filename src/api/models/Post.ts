import { RequestAPI } from '../core'
import File from './objects/File'
import { FileType } from './objects/FileType'

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

    async getTags(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/tags`,
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

    async setImage(id: number, photoUri: string) {
        const file = new File('image.png', photoUri, FileType.Png, 'media')
        return RequestAPI({
            route: `${this.endpoint}/${id}/media?media_type=image`,
            method: 'POST',
            token: true,
            files: [file]
        })
    }

    async setVideo(id: number, videoUri: string) {
        const file = new File('video.mp4', videoUri, FileType.Video, 'media')
        return RequestAPI({
            route: `${this.endpoint}/${id}/media?media_type=video`,
            method: 'POST',
            token: true,
            files: [file]
        })
    }

    async like(userId: number, postId: number) {
        return RequestAPI({
            route: `${this.endpoint}/${postId}/like?user_id=${userId}`,
            method: 'POST',
            token: true
        })
    }

    async unlike(userId: number, postId: number) {
        return RequestAPI({
            route: `${this.endpoint}/${postId}/unlike?user_id=${userId}`,
            method: 'DELETE',
            token: true
        })
    }

    async wasLikedBy(userId: number, postId: number) {
        return RequestAPI({
            route: `${this.endpoint}/${postId}/waslikedby/${userId}`,
            method: 'GET',
            token: true
        })
    }
}

export default PostModel