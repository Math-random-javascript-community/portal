import styled from 'styled-components';
import {ImageProps} from './Image.interfaces';

interface WrapperProps {
  className?: string;
  width?: number;
  height?: number;
  radius?: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-content: center;

  min-width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  border-radius: ${props => props.radius}px;
  background-color: ${({theme}) => theme.image.backgroundColor || 'rgba(51, 51, 51, 1)'};

  img {
    align-self: center;
    border-radius: ${props => props.radius}px;
  }

  &.with-bg-image {
    background-image: url('data:image/svg+xml;utf8,
      <svg 
        width="216"
        height="113"
        viewBox="0 0 216 113" 
        fill="${({theme}) => theme.image.defaultColor || 'rgba(86, 86, 86, 1)'}" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M147.694 28.6559C146.422 28.2981 145.096 28.5609 143.957 29.3965C142.819 30.2321 141.943 31.5849 141.489 33.2088C141.035 34.8327 141.034 36.6197 141.486 38.2447C141.937 39.8696 142.811 41.2246 143.949 42.0629C145.087 42.9012 146.412 43.1673 147.685 42.8126C148.957 42.4578 150.092 41.506 150.882 40.1302C151.672 38.7544 152.066 37.0461 151.991 35.3161C151.916 33.5862 151.378 31.9495 150.474 30.7041C149.72 29.669 148.753 28.956 147.694 28.6559ZM115.552 68.5612C108.633 57.5818 101.713 46.6038 94.7893 35.6272L64 84.5H105.525C108.867 79.19 112.212 73.8814 115.559 68.5743L115.552 68.5612ZM109.449 84.5C116.511 73.1288 123.576 61.7591 130.643 50.3909C137.713 61.7591 144.78 73.1288 151.842 84.5H109.449Z"/>
      </svg>
    ');
    background-repeat: no-repeat;
    background-position: center;
  }

  &.img-normal {
    width: 214px;
    height: 202px;
  }

  &.img-wide {
    width: 343px;
    height: 202px;
  }
`;

export function Image({
  width,
  height,
  alt,
  src,
  className,
  radius = 0,
  isWide = false
}: ImageProps) {
  const imgClass = `${!src.length ? 'with-bg-image' : ''} ${isWide === true ? 'img-wide' : ''} ${className || ''}`;

  const imgWidth = width || (isWide ? 343 : 214);
  const imgHeight = height || 202;

  return (
    <Wrapper className={imgClass} width={imgWidth} height={imgHeight} radius={radius}>
      <img
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        className={className}
      />
    </Wrapper>
  );
}
