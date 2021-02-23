import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgMail({ className }: IconImgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.125 5.5C3.64175 5.5 3.25 5.89175 3.25 6.375V17.625C3.25 18.1082 3.64175 18.5 4.125 18.5H19.875C20.3582 18.5 20.75 18.1082 20.75 17.625V6.375C20.75 5.89175 20.3582 5.5 19.875 5.5H4.125ZM1.25 6.375C1.25 4.78718 2.53718 3.5 4.125 3.5H19.875C21.4628 3.5 22.75 4.78718 22.75 6.375V17.625C22.75 19.2128 21.4628 20.5 19.875 20.5H4.125C2.53718 20.5 1.25 19.2128 1.25 17.625V6.375Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.46069 7.88604C4.79976 7.4501 5.42804 7.37156 5.86399 7.71063L12 12.4831L18.1361 7.71063C18.5721 7.37156 19.2003 7.4501 19.5394 7.88604C19.8785 8.32199 19.7999 8.95027 19.364 9.28934L12.614 14.5393C12.2529 14.8202 11.7472 14.8202 11.3861 14.5393L4.63611 9.28934C4.20016 8.95027 4.12162 8.32199 4.46069 7.88604Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgMail;
