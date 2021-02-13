import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag } from './Tag';
import { TagProps } from './TagProps';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

export const TagItem: Story<TagProps> = (args) => <Tag {...args} />;
TagItem.args = {
  children: '#Tag_Text'
};
