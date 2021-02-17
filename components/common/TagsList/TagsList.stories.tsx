import { Story, Meta } from '@storybook/react/types-6-0';
import { TagsListProps } from './TagList.interface';
import { TagsList } from './TagsList';

export default {
  title: 'Components/TagsList',
  component: TagsList
} as Meta;

export const List: Story<TagsListProps> = (args) => <TagsList {...args} />;
List.args = {
  tags: [
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text',
    '#Tag_Text'
  ]
};
