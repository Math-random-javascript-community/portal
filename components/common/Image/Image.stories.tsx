import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Image } from './Image';
import { Event } from './Event';
import { Speaker } from './Speaker';
import { ImageProps, EventImageProps } from './Image.interfaces';

export default {
  title: 'Components/Image',
  component: Image
} as Meta;

export const Demo: Story<ImageProps> = (args: ImageProps) => <Image {...args} />;
Demo.args = {
  alt: 'Def Image',
  src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyAXrnh_zYwlV7_xzCuNKofnPUhTfzEBtJQ&usqp=CAU',
  width: 0,
  height: 0,
  isWide: true
};

export const EventImage: Story<EventImageProps> = (args: EventImageProps) => <Event {...args} />;
EventImage.args = {
  alt: 'Event Image',
  src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1R1vbjJquxCZce8yEncdFhoAk1d-bECwGlw&usqp=CAU'
};

export const SpeakerPhoto: Story<ImageProps> = (args: ImageProps) => <Speaker {...args} />;
SpeakerPhoto.args = {
  alt: 'Speaker Photo',
  src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRln3_7OACCZ8SzJL-NSSlJz8dzl_I5JebwfA&usqp=CAU'
};
