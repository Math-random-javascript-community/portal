import { Story, Meta } from '@storybook/react/types-6-0';
import YoutubeVideo, { YoutubeVideoProps} from './YoutubeVideo';

export default {
  title: 'Components/YoutubeVideo',
  component: YoutubeVideo,
} as Meta;

export const Small: Story<YoutubeVideoProps> = (args) => <YoutubeVideo {...args} />;
Small.args = {
  url: 'https://www.youtube.com/watch?v=axuR_-BSZug&list=PLFjpByuUbtfgGG2cv4E_UbIL_r_ogCFY1&index=2',
  size: 'small',
};

export const Big: Story<YoutubeVideoProps> = (args) => <YoutubeVideo {...args} />;
Big.args = {
  url: 'https://www.youtube.com/watch?v=axuR_-BSZug&list=PLFjpByuUbtfgGG2cv4E_UbIL_r_ogCFY1&index=2',
  size: 'big',
};
