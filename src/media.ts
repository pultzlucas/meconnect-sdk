import * as ImagePicker from 'expo-image-picker';

interface ImageConfig {
    aspect: [number, number]
}

export default {
    pickImage({ aspect }: ImageConfig) {
        return ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect,
            quality: 1,
        });

    },
    pickVideo({ aspect }: ImageConfig) {
        return ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect,
            quality: 1,
        });
    }
}