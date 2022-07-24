import * as ImagePicker from 'expo-image-picker';

export default {
    pickImage() {
        return ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
        });
    }
}