import { Story, Meta } from '@storybook/react/types-6-0';
import CustomLink from './CustomLink';
import { CustomLinkProps } from './CustomLinkProps';

export default {
  title: 'Components/CustomLink',
  component: CustomLink,
} as Meta;

export const LinkWithTitle: Story<CustomLinkProps> = (args) => <CustomLink {...args} />;
LinkWithTitle.args = {
  url: 'https://google.com',
  title: 'Google',
};

export const LinkWithoutTitle: Story<CustomLinkProps> = (args) => <CustomLink {...args} />;
LinkWithoutTitle.args = {
  url: 'https://www.youtube.com/embed/tpRVWeMsoaE',
};
