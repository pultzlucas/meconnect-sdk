import * as SecureStore from 'expo-secure-store';

export default {
    set(token: string) {
        return SecureStore.setItemAsync('MeconnectApiToken', token)
    },

    unset() {
        return SecureStore.deleteItemAsync('MeconnectApiToken')
    },

    get() {
        return SecureStore.getItemAsync('MeconnectApiToken')
    },

    async isset() {
        return !!(await this.get())
    }
}