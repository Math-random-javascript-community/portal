export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  radius?: number;
  isWide?: boolean;
}

export interface EventImageProps extends Omit<ImageProps, 'width' | 'height' | 'radius'> {}
export interface SpeakerProps extends Omit<ImageProps, 'isWide' | 'width' | 'height'> {}

export interface DefaultImageProps {
  className?: string;
}
