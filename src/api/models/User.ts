import { RequestAPI } from '../core'

class UserModel {
    static allUsers(token: string) {
        return RequestAPI({
            route: '/users',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }
}

export default UserModel