import styled from 'styled-components';
import { MenuItemProps, StyledMenuItemProps } from './MenuItem.interface';

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

  &:hover {
    background: #333333;
    border-radius: 4px;
  }
`;
export const MenuItem = ({ title, active = false }: MenuItemProps) => (
  <StyledMenuItem active={active}>{title}</StyledMenuItem>
);
