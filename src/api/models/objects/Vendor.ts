import User from './User'

export default interface Vendor extends User {
    cnpj: string
    tel: string
    commercial: string
    cep: string
    description: string
}