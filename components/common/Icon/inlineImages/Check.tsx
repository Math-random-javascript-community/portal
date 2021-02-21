import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgCheck({ className }: IconImgProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={8} cy={8} r={7} stroke="white" strokeWidth={2} />
    </svg>
  );
}

export default SvgCheck;
