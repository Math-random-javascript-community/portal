import { Story, Meta } from '@storybook/react/types-6-0';
import {Dropdown} from './Dropdown';
import { DropdownProps, SelectorItem } from './Dropdown.interfaces';
import React from 'react';

const dropdownItems: SelectorItem[] = [
  { val: 'val1', label: 'TypeScript' },
  { val: 'val2', label: 'Ract' },
  { val: 'val3', label: 'Vue' },
  { val: 'val4', label: 'Angilar' },
  { val: 'val5', label: 'Styled Component' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

export const DropdownSel: Story<DropdownProps> = (args) => <Dropdown {...args} />;
DropdownSel.args = {
  label: 'Professional Skills',
  items: dropdownItems,
  defaultVal: 'val5'
};
