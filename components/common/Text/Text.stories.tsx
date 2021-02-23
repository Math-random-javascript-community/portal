import { Story, Meta } from '@storybook/react/types-6-0';
import Text from './Text';
import { TextProps } from './Text.interface';
import TextBold from './TextBold';
import TextButton from './TextButton';
import TextH1 from './TextH1';
import TextH2 from './TextH2';
import TextH3 from './TextH3';
import TextPreTitle from './TextPreTitle';
import TextSmall from './TextSmall';
import TextSubtitle from './TextSubtitle';

export default {
  title: 'Components/Text',
  argTypes: { color: { control: 'color' } }
} as Meta;

export const Body: Story<TextProps> = (args: TextProps) => <Text {...args} />;
Body.args = {
  children: 'Text body'
};

export const Bold: Story<TextProps> = (args: TextProps) => <TextBold {...args} />;
Bold.args = {
  children: 'Text Bold'
};

export const Button: Story<TextProps> = (args: TextProps) => <TextButton {...args} />;
Button.args = {
  children: 'Text Button'
};

export const H1: Story<TextProps> = (args: TextProps) => <TextH1 {...args} />;
H1.args = {
  children: 'Text H1'
};

export const H2: Story<TextProps> = (args: TextProps) => <TextH2 {...args} />;
H2.args = {
  children: 'Text H2'
};

export const H3: Story<TextProps> = (args: TextProps) => <TextH3 {...args} />;
H3.args = {
  children: 'Text H3'
};

export const PreTitle: Story<TextProps> = (args: TextProps) => <TextPreTitle {...args} />;
PreTitle.args = {
  children: 'Text PreTitle'
};

export const Small: Story<TextProps> = (args: TextProps) => <TextSmall {...args} />;
Small.args = {
  children: 'Text Small'
};

export const Subtitle: Story<TextProps> = (args: TextProps) => <TextSubtitle {...args} />;
Subtitle.args = {
  children: 'Text Subtitle'
};
