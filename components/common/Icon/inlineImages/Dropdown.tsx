import {  IconImgProps } from '../Icon.interfaces';
export default function Dropdown({className}: IconImgProps) {
  return (
    <svg className={`fillImg ${className}`} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.59509 3.42424C0.931602 2.94524 1.55514 2.85894 1.98779 3.2315L5.95764 6.50925L9.78418 3.2315C10.2168 2.85894 10.8404 2.94524 11.1769 3.42424C11.5134 3.90324 11.4355 4.59357 11.0028 4.96613L6.56695 8.76855C6.20856 9.07715 5.70672 9.07715 5.34833 8.76855L0.769178 4.96613C0.336521 4.59357 0.258579 3.90324 0.59509 3.42424Z"/></svg>
  );
}