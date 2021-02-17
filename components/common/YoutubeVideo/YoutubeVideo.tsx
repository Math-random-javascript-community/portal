import React from 'react';
import { VideoSize } from './VideoSize';
import { YoutubeVideoProps } from './YoutubeVideo.interface';

function getYoutubeVideoId(url: string): string {
  return url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
}

function getVideoSize(size: VideoSize): { width: string; height: string } {
  switch (size) {
    case 'small':
      return {
        width: '276px',
        height: '200px'
      };
    case 'big':
    default:
      return {
        width: '506px',
        height: '317px'
      };
  }
}

const YoutubeVideo = ({ url, size }: YoutubeVideoProps) => {
  const videoId = getYoutubeVideoId(url);
  return (
    <>
      <iframe
        {...getVideoSize(size)}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default YoutubeVideo;
