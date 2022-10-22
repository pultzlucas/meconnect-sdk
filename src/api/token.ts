import * as SecureStore from 'expo-secure-store';

export default {
    set(token: string) {
        return SecureStore.setItemAsync('ApiToken', token)
    },

    unset() {
        return SecureStore.deleteItemAsync('ApiToken')
    },

    get() {
        return SecureStore.getItemAsync('ApiToken')
    },

    async isset() {
        return !!(await this.get())
    }
}