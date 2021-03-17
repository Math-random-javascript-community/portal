import styled from 'styled-components';
import LogoImgBottom from './LogoImgBottom';
import LogoImgTop from './LogoImgTop';
import {LogoProps} from './Logo.interface';
import {availableColours} from '../../../constants/logoColors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 172px;
`;

export function Logo({ alt, color }: LogoProps) {
  const fill: string = color || availableColours[Math.floor(Math.random() * availableColours.length)];

  return (
    <Wrapper>
      <LogoImgTop alt={alt} />
      <LogoImgBottom fill={fill} />
    </Wrapper>
  );
}
