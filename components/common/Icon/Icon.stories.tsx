import {Meta, Story} from '@storybook/react/types-6-0';
import Icon from './Icon';
import {IconProps} from './IconProps';
import IconTypes from './IconTypes';
import IconSizes from './IconSizes';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  iconType: IconTypes.Google,
  size: IconSizes.Large,
  text: 'Google large icon',
  isTextOnLeft: false,
};
