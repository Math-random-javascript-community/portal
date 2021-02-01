import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  placeholder: 'Type text here',
};

export const RequiredWithLabelAndBottomText = Template.bind({});
RequiredWithLabelAndBottomText.args = {
  ...Default.args,
  label: 'Label',
  isRequired: true,
  requiredMessage: 'this field is required',
  bottomText: 'bottom text',
};

export const Valid = Template.bind({});
Valid.args = {
  ...RequiredWithLabelAndBottomText.args,
  hasValidValue: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...RequiredWithLabelAndBottomText.args,
  hasError: true,
};
