import { RequestAPI } from '../core'

class UserModel {
    static allUsers() {
        return RequestAPI({
            route: '/users',
            method: 'GET',
            token: true
        })
    }
}

export default UserModel