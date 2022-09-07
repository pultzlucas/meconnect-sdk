import AsyncStorage from '@react-native-async-storage/async-storage'

export default {
    set(token: string) {
        return AsyncStorage.setItem('@MCON_API_TOKEN', token)
    },

    unset() {
        return AsyncStorage.removeItem('@MCON_API_TOKEN')
    },

    get() {
        return AsyncStorage.getItem('@MCON_API_TOKEN')
    },

    async isset() {
        return !!(await this.get())
    }
}