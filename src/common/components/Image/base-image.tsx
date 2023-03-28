import {Image} from 'react-native';
import ImageAsset from './utils/image-asset-map';

interface BaseImageProps {
  type: keyof typeof ImageAsset;
}

export default function BaseImage({type}: BaseImageProps) {
  return <Image source={ImageAsset[type]} />;
}
