import {Meta, Story} from '@storybook/react/types-6-0';
import {Logo, LogoSolid} from './index';
import {LogoProps, LogoSolidProps} from './Logo.interface';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

export const RandomColorLogo: Story<LogoProps> = (args: LogoProps) => <Logo {...args}/>;
RandomColorLogo.args = {
  alt: 'RandomColorLogo',
  color: 'green'
};

export const SolidColor: Story<LogoSolidProps> = (args: LogoSolidProps) => <LogoSolid {...args} />;
SolidColor.args = {
  alt: 'Solid Color Logo'
};
