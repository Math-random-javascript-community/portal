import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarBig } from './AvatarBig';
import { AvatarSmall } from './AvatarSmall';
import { AvatarProps, AvatarBigProps, AvatarSmallProps } from './Avatar.interfaces';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

export const Normal: Story<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />;
Normal.args = {
  alt: 'Avatar for mobile',
  src: 'https://static.wixstatic.com/media/2cd43b_19e36cf3e57945c489b583cf4a0fe7fc~mv2.png'
};

export const Big: Story<AvatarBigProps> = (args: AvatarBigProps) => <AvatarBig {...args} />;
Big.args = {
  alt: 'Avatar for desktop',
  src: 'https://static.wixstatic.com/media/2cd43b_19e36cf3e57945c489b583cf4a0fe7fc~mv2.png'
};

export const Small: Story<AvatarSmallProps> = (args: AvatarSmallProps) => <AvatarSmall {...args} />;
Small.args = {
  alt: 'Avatar small',
  src: 'https://static.wixstatic.com/media/2cd43b_19e36cf3e57945c489b583cf4a0fe7fc~mv2.png'
};
