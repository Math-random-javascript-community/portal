import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from './Button';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { StandardButton } from './StandardButton';
import { PositiveButton } from './PositiveButton';

export default {
  title: 'Components/Button',
  component: PrimaryButton,
} as Meta;

export const Primary: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;
Primary.args = {
    isRounded: false,
    text: 'Primary button',
    type: 'submit',
};

export const Secondary: Story<ButtonProps> = (args) => <SecondaryButton {...args} />;
Secondary.args = {
    isRounded: true,
    text: 'Secondary button',
    type: 'button',
};

export const Standard: Story<ButtonProps> = (args) => <StandardButton {...args} />;
Standard.args = {
    isRounded: false,
    text: 'Standard button',
};

export const Positive: Story<ButtonProps> = (args) => <PositiveButton {...args} />;
Positive.args = {
    isRounded: true,
    text: 'Positive button',
};
