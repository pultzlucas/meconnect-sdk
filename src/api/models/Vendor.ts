import { RequestAPI } from '../core'
import File from './objects/File'
import { ImageType } from './objects/ImageType'
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

    async changeProfilePhoto(id: number, photoUri: string) {
        const file = new File('image.png', photoUri, ImageType.Png, 'image')
        return RequestAPI({
            route: `${this.endpoint}/${id}/photo`,
            method: 'POST',
            token: true,
            files: [file]
        })
    }
}

export default VendorModel