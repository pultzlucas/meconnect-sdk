import { RequestAPI } from '../core'

class MailModel {
    private endpoint: string

    constructor() {
        this.endpoint = '/mail'
    }

    async sendEmailVerificationCode(email: string, name: string) {
        return RequestAPI({
            route: `${this.endpoint}/confirmation?email=${email}&name=${name}`,
            method: 'POST',
        })
    }
}

export default MailModel