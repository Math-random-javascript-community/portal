import { ImageProps } from '../Image/Image.interfaces';

export interface AvatarProps extends Omit<ImageProps, 'isWide' | 'radius'> {}
export interface AvatarBigProps
  extends Omit<ImageProps, 'isWide' | 'radius' | 'width' | 'height'> {}
export interface AvatarSmallProps extends AvatarBigProps {}
export interface DefaultAvatarProps {
  className?: string;
}
