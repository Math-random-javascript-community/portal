import { IconTypes } from './IconTypes';
import { IconSizes } from './IconSizes';

export interface IconProps {
  iconType: IconTypes;
  width?: number;
  height?: number;
  size?: IconSizes;
  className?: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface IconImgProps {
  className?: string;
}

export interface ImgComponentProps {
  className: string;
}
