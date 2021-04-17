import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInputProps, TextAreaProps } from './TextInput.interface';
import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps & TextAreaProps> = (args) => <TextInput {...args} />;

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
