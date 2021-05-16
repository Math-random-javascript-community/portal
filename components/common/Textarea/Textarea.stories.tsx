import { Story, Meta } from '@storybook/react/types-6-0';
import { TextareaProps } from './Textarea.interface';
import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  placeholder: 'Type text here'
};

export const RequiredWithLabelAndBottomText = Template.bind({});
RequiredWithLabelAndBottomText.args = {
  ...Default.args,
  label: 'Label',
  isRequired: true,
  requiredMessage: 'this field is required',
  bottomText: 'bottom text'
};

export const Valid = Template.bind({});
Valid.args = {
  ...RequiredWithLabelAndBottomText.args,
  hasValidValue: true
};

export const WithError = Template.bind({});
WithError.args = {
  ...RequiredWithLabelAndBottomText.args,
  hasError: true
};
