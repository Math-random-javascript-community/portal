import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgFb({ className }: IconImgProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.354 5.624C16.604 3.883 14.466 3 12 3C9.511 3 7.367 3.884 5.627 5.625C3.884 7.366 3 9.512 3 12C3 14.465 3.883 16.603 5.624 18.354C7.365 20.11 9.51 21 12 21C14.467 21 16.605 20.11 18.356 18.357C20.111 16.604 21 14.465 21 12C21 9.512 20.11 7.366 18.354 5.624ZM16.942 16.943C15.805 18.082 14.506 18.731 13 18.928V14H15V12H13V10.6C13 10.5211 13.0156 10.443 13.0458 10.3702C13.076 10.2973 13.1203 10.2311 13.1761 10.1754C13.2319 10.1197 13.2982 10.0755 13.3711 10.0454C13.444 10.0153 13.5221 9.99987 13.601 10H15V8H13.603C12.861 8 12.242 8.273 11.746 8.822C11.25 9.369 11 10.037 11 10.83V12H9V14H11V18.93C9.478 18.735 8.174 18.085 7.043 16.946C5.668 15.562 5 13.944 5 12C5 10.034 5.667 8.412 7.042 7.04C8.412 5.667 10.034 5 12 5C13.945 5 15.562 5.668 16.945 7.043C18.328 8.415 19 10.037 19 12C19 13.941 18.327 15.559 16.942 16.943Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgFb;