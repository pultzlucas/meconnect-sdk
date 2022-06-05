import AsyncStorage from '@react-native-async-storage/async-storage'

export default {
    async set(token: string): Promise<void> {
        AsyncStorage.setItem('@MCON_API_TOKEN', token)
    },

    async get() {
        return AsyncStorage.getItem('@MCON_API_TOKEN')
    }
}