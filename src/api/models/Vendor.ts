import { RequestAPI } from '../core'
import File from './objects/File'
import { FileType } from './objects/FileType'
import Vendor from './objects/Vendor'

class VendorModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/users/vendor'
    }

    async create(params: Vendor) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params
        })
    }

    async all() {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
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

    async getPosts(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/posts`,
            method: 'GET',
            token: true
        })
    }

    async getProducts(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/products`,
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

    async getConnections(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/connections`,
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

    async getByCommercial(comm: number) {
        return RequestAPI({
            route: `${this.endpoint}/bycomm/${comm}`,
            method: 'GET',
            token: true
        })
    }

    async getByCep(cep: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycep/${cep}`,
            method: 'GET',
            token: true
        })
    }

    async getByCnpj(cnpj: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycnpj/${cnpj}`,
            method: 'GET',
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

    // Media routes

    async setProfilePhoto(id: number, photoUri: string) {
        const file = new File('image.png', photoUri, FileType.Png, 'image')
        return RequestAPI({
            route: `${this.endpoint}/${id}/photo`,
            method: 'POST',
            token: true,
            files: [file]
        })
    }

    async setProfileBanner(id: number, photoUri: string) {
        const file = new File('image.png', photoUri, FileType.Png, 'image')
        return RequestAPI({
            route: `${this.endpoint}/${id}/banner`,
            method: 'POST',
            token: true,
            files: [file]
        })
    }
    
}

export default VendorModel