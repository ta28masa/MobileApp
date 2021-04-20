import { Dimensions, Image } from 'react-native';

const calcHeight = (src) => {
    const maxWidth = Dimensions.get('window').width
    const { width, height } = Image.resolveAssetSource(src)
    return (height * maxWidth / width);
}

const getAccountType = (num) => {
    return '普通預金';
}

export default {
    calcHeight,
    getAccountType
}