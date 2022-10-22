import { RequestAPI } from '../core'
import File from './objects/File'
import { FileType } from './objects/FileType'
import Vendor from './objects/Vendor'

class VendorModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/users/vendor'
    }

    create(params: Vendor) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params
        })
    }

    all() {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            token: true
        })
    }

    get(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            token: true
        })
    }

    getPosts(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/posts`,
            method: 'GET',
            token: true
        })
    }

    getProducts(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/products`,
            method: 'GET',
            token: true
        })
    }

    getTags(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/tags`,
            method: 'GET',
            token: true
        })
    }

    getConnections(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}/connections`,
            method: 'GET',
            token: true
        })
    }

    getByTags(tags: string[]) {
        return RequestAPI({
            route: `${this.endpoint}/bytags`,
            method: 'GET',
            params: {
                tags: tags.join(',')
            },
            token: true
        })
    }

    getByCommercial(comm: number) {
        return RequestAPI({
            route: `${this.endpoint}/bycom/${comm}`,
            method: 'GET',
            token: true
        })
    }

    getByCep(cep: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycep/${cep}`,
            method: 'GET',
            token: true
        })
    }

    getByCnpj(cnpj: string) {
        return RequestAPI({
            route: `${this.endpoint}/bycnpj/${cnpj}`,
            method: 'GET',
            token: true
        })
    
    }

    getTops(limit: number) {
        return RequestAPI({
            route: `${this.endpoint}/tops/${limit}`,
            method: 'GET',
            token: true
        })
    }

    update(id: number, params: any) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'PUT',
            params,
            token: true
        })
    }

    delete(id: number) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'DELETE',
            token: true
        })
    }

    // Media routes

    setProfilePhoto(id: number, photoUri: string) {
        const file = new File('image.png', photoUri, FileType.Png, 'image')
        return RequestAPI({
            route: `${this.endpoint}/${id}/photo`,
            method: 'POST',
            token: true,
            files: [file]
        })
    }

    setProfileBanner(id: number, photoUri: string) {
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