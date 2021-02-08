import styled from 'styled-components';
import dynamic from 'next/dynamic';
import IconTypes from './IconTypes';
import IconSizes from './IconSizes';
import React from 'react';
import {IconProps} from './IconProps';

interface WrapperProps {
  isTextOnLeft: boolean;
  iconWidth?: number;
  iconHeight?: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${props => props.isTextOnLeft == true ? 'row-reverse' : 'row'};
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
    width: 7px;
    height: 7px;
  }

  .iconSizeSmall {
    width: 12px;
    height: 12px;
  }

  .iconSizeMedium {
    width: 24px;
    height: 24px;
  }

  .iconSizeLarge {
    width: 36px;
    height: 36px;
  }
  
  &:hover {
    opacity: 0.95;
  }

  &:focus {
    outline: 0;
  }
`;

const IconTextWrapper = styled.div`
  color: ${({theme}) => theme.icon.activeColor};
  font-size: 16px;
  white-space: nowrap;

  &.iconText {
    color: ${({theme}) => theme.icon.defaultColor};
  }

  &.iconTextActive {
    color: ${({theme}) => theme.icon.activeColor};
  }

  &.iconTextSizeExtraSmall {
    font-size: 8px;
  }

  &.iconTextSizeSmall {
    font-size: 10px;
  }

  &.iconTextSizeMedium {
    font-size: 16px;
  }

  &.iconTextSizeLarge {
    font-size: 24px;
  }
`;

const Spacer = styled.div`
  width: 2px;
`;

interface ImgComponentProps {
  className: string;
}

const getImgComponent = (iconType: IconTypes): React.ComponentType<ImgComponentProps> =>
  dynamic(() => import(`./inlineImages/${iconType}`), {ssr: true});

function Icon({iconType, className, text, width, height, size = IconSizes.Medium, isActive = false, isTextOnLeft = false}: IconProps) {
  const activeStyle = isActive === true ? 'Active' : 'Inactive';
  const iconSizeStyle = (!width && !height) ? size : '';
  const ImgComponent: React.ComponentType<ImgComponentProps> = getImgComponent(iconType);

  return (
    <Wrapper iconWidth={width} iconHeight={height} className={className} isTextOnLeft={isTextOnLeft}>
      <ImgComponent className={`icon icon${activeStyle} iconSize${iconSizeStyle}`}/>
      <Spacer/>
      {text
        ? <IconTextWrapper className={`iconText iconText${activeStyle} iconTextSize${size}`}>{text}</IconTextWrapper>
        : null
      }
    </Wrapper>
  );
}

export default Icon;