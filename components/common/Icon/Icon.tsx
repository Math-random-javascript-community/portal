import styled from 'styled-components';
import dynamic from 'next/dynamic';
import {IconTypes} from './IconTypes';
import {IconSizes} from './IconSizes';
import React from 'react';
import {IconProps, ImgComponentProps} from './Icon.interfaces';

interface WrapperProps {
  iconWidth?: number;
  iconHeight?: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .strokeImg {
    stroke: ${({theme}) => theme.icon.defaultColor};
    fill: none;
  }

  .fillImg {
    fill: ${({theme}) => theme.icon.defaultColor};
  }

  .icon {
    width: ${props => props.iconWidth || '24'}px;
    height: ${props => props.iconHeight || '24'}px;
  }

  .fillImg.iconActive {
    fill: ${({theme}) => theme.icon.activeColor};
  }

  .strokeImg.iconActive {
    stroke: ${({theme}) => theme.icon.activeColor};
    fill: none;
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

export function Icon({iconType, className, width, height, size = IconSizes.Medium, isActive = false}: IconProps) {
  const activeStyle = isActive === true ? 'Active' : 'Inactive';
  const iconSizeStyle = (!width && !height) ? size : '';
  const ImgComponent: React.ComponentType<ImgComponentProps> = getImgComponent(iconType);

  return (
    <Wrapper iconWidth={width} iconHeight={height} className={className}>
      <ImgComponent className={`icon icon${activeStyle} iconSize${iconSizeStyle}`}/>
    </Wrapper>
  );
}