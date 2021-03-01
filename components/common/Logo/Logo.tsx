import styled from 'styled-components';
import LogoImgBottom from './LogoImgBottom';
import LogoImgTop from './LogoImgTop';
import { LogoProps } from './Logo.interface';

const availableColours: readonly string[] = [
  '#0687FF',
  '#06FFBB',
  '#FFE400',
  '#FF3F06'
];

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
