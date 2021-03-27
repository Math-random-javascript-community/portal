export interface StyledMenuItemProps {
  active: boolean;
}

export interface MenuItemProps extends StyledMenuItemProps {
  text: string;
  href: string;
}
