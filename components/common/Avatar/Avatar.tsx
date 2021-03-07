import {Image} from '../Image';
import {AvatarProps} from './Avatar.interfaces';
import styled from 'styled-components';

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
  background-color: ${({theme}) => theme.avatar.backgroundColor || 'rgba(51, 51, 51, 1)'};

  &.with-bg-image {
    background-image: url('data:image/svg+xml;utf8, 
      <svg width="114" height="114" viewBox="0 0 114 114" fill="${({theme}) => theme.avatar.defaultColor || 'rgba(86, 86, 86, 1)'}" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M25.3326 9.10601C34.7062 2.84276 45.7266 -0.500244 57.0002 -0.500244C72.1122 -0.483003 86.6004 5.52789 97.2863 16.2138C107.972 26.8996 113.983 41.3878 114 56.4999C114 67.7735 110.657 78.7938 104.394 88.1675C98.1308 97.5411 89.2286 104.847 78.8132 109.161C68.3978 113.475 56.9369 114.604 45.88 112.405C34.823 110.205 24.6666 104.777 16.695 96.8051C8.72337 88.8335 3.29463 78.677 1.09527 67.6201C-1.1041 56.5631 0.0246972 45.1023 4.3389 34.6869C8.65311 24.2715 15.959 15.3693 25.3326 9.10601ZM83.4804 78.655C87.2821 82.4064 89.458 87.5012 89.5391 92.8416H89.5432C96.9265 86.2489 102.133 77.5691 104.474 67.9515C106.814 58.3339 106.179 48.2322 102.651 38.984C99.1225 29.7358 92.8686 21.7773 84.717 16.1624C76.5654 10.5475 66.9005 7.54095 57.0022 7.54095C47.1039 7.54095 37.439 10.5475 29.2874 16.1624C21.1358 21.7773 14.8819 29.7358 11.3538 38.984C7.82573 48.2322 7.18994 58.3339 9.53059 67.9515C11.8712 77.5691 17.0779 86.2489 24.4612 92.8416C24.5424 87.5012 26.7182 82.4064 30.5199 78.655C34.3216 74.9035 39.4449 72.7957 44.7859 72.7856H69.2145C74.5555 72.7957 79.6787 74.9035 83.4804 78.655ZM45.6903 27.3592C49.038 25.1223 52.9739 23.9284 57.0001 23.9284C62.3992 23.9284 67.5771 26.0732 71.3949 29.8909C75.2126 33.7086 77.3573 38.8865 77.3573 44.2856C77.3573 48.3118 76.1634 52.2477 73.9265 55.5954C71.6897 58.9431 68.5103 61.5524 64.7905 63.0932C61.0707 64.634 56.9776 65.0371 53.0287 64.2516C49.0798 63.4661 45.4524 61.5273 42.6054 58.6803C39.7584 55.8333 37.8196 52.206 37.0341 48.2571C36.2486 44.3082 36.6518 40.215 38.1926 36.4952C39.7333 32.7754 42.3426 29.5961 45.6903 27.3592Z"/>
      </svg>');
    background-repeat: no-repeat;
    background-position: center;
  }

  & > .with-bg-image {
    background-color: transparent;
    background-image: none;
  }
`;

export function Avatar(props: AvatarProps) {
  const s = props.width || props.height || 190;
  const r = s / 2;
  const imgClass = `${!props.src?.length ? 'with-bg-image' : ''} ${props.className || ''}`;

  return (
    <Wrapper className={imgClass} width={s} height={s} radius={r}>
      <Image {...props} width={s} height={s} radius={r}/>
    </Wrapper>
  );
}
