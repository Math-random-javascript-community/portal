import IconTypes from './IconTypes';
import IconSizes from './IconSizes';

export interface IconProps {
  iconType: IconTypes,
  text?: string,
  width?: number,
  height?: number,
  isTextOnLeft?: boolean,
  size?: IconSizes,
  className?: string,
  isActive?: boolean
}