import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.interface';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta;

export const WithLabel: Story<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />;
WithLabel.args = {
  label: 'Subscribe to Math.random() community JavaScript Digest'
};
export const WithoutLabel: Story<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />;
WithoutLabel.args = {
  checked: false
};


