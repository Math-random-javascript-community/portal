import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItem } from './MenuItem';
import { MenuItemProps } from './MenuItem.interface';

export default {
  title: 'Components/MenuItem',
  component: MenuItem
} as Meta;

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  title: 'Events',
  active: false
};
