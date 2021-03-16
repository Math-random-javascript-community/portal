import styled from 'styled-components';
import { MenuItemProps, StyledMenuItemProps } from './MenuItem.interface';
import { device } from '../../../styles/mediaQueries';

const StyledMenuItem = styled.div<StyledMenuItemProps>`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: ${({ active, theme }) => (active ? theme.menu.activeColor : theme.text.defaultColor)};

  @media ${device.tablet} {
    background: ${({ active, theme }) => (active ? theme.menu.activeBackgroundColor : ``)};
    border-radius: ${({ active }) => (active ? `4px` : `unset`)};
  }
`;
export const MenuItem = ({ text, active = false }: MenuItemProps) => (
  <StyledMenuItem active={active}>{text}</StyledMenuItem>
);
