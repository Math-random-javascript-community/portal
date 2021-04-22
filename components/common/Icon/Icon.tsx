import styled from 'styled-components';
import dynamic from 'next/dynamic';
import {IconTypes} from './IconTypes';
import {IconSizes} from './IconSizes';
import React from 'react';
import {IconProps, ImgComponentProps} from './Icon.interfaces';

interface WrapperProps {
  iconWidth?: number;
  iconHeight?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .icon {
    width: ${props => props.iconWidth || '24'}px;
    height: ${props => props.iconHeight || '24'}px;
  }
  .icon [stroke] {
    stroke: ${({theme}) => theme.icon.defaultColor};
  } 
  .icon [fill] {
    fill: ${({theme}) => theme.icon.defaultColor};
  }

  .iconActive path[stroke] {
    stroke: ${({theme}) => theme.icon.activeColor};
  }
  .iconActive path[fill] {
    fill: ${({theme}) => theme.icon.activeColor};
  }

  .iconSizeExtraSmall {
    width: 16px;
    height: 16px;
  }

  .iconSizeSmall {
    width: 18px;
    height: 18px;
  }

  .iconSizeMedium {
    width: 24px;
    height: 24px;
    viewBox: 0 0 24px 24px;
  }

  .iconSizeLarge {
    width: 40px;
    height: 40px;
  }
  
  &:hover {
    opacity: 0.95;
  }

  &:focus {
    outline: 0;
  }
`;

const getImgComponent = (iconType: IconTypes): React.ComponentType<ImgComponentProps> =>
  dynamic(() => import(`./inlineImages/${iconType}`), {ssr: true});

export function Icon({
  iconType,
  className,
  width,
  height,
  size = IconSizes.Medium,
  isActive = false,
  onClick
}: IconProps) {
  const activeStyle = isActive === true ? 'Active' : 'Inactive';
  const iconSizeStyle = !width && !height ? size : '';
  const ImgComponent: React.ComponentType<ImgComponentProps> = getImgComponent(iconType);

  return (
    <Wrapper iconWidth={width} iconHeight={height} className={className} onClick={onClick}>
      <ImgComponent className={`icon icon${activeStyle} iconSize${iconSizeStyle}`} />
    </Wrapper>
  );
}
