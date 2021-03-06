import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgCross({ className }: IconImgProps) {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.0998 0.849905L3.85854 2.60864L5.70845 0.758739L7.14071 2.19101L5.29081 4.04091L7.04955 5.79965L5.79961 7.04959L4.04087 5.29085L2.19097 7.14075L0.758699 5.70849L2.60861 3.85858L0.849866 2.09984L2.0998 0.849905Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgCross;
