import {  IconImgProps } from '../Icon.interfaces';
export default function AttachFile({className}: IconImgProps) {
  return (
    <svg className={`strokeImg ${className}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path d="M18.6782 8.4641L12.9282 18.4234C11.8236 20.3366 9.37727 20.9921 7.4641 19.8875V19.8875C5.55093 18.7829 4.89543 16.3366 6 14.4234L9 9.22724M9.73205 11.9593L13.9821 4.59808C14.8105 3.1632 16.6452 2.67157 18.0801 3.5V3.5C19.515 4.32843 20.0066 6.1632 19.1782 7.59808L15.6782 13.6603M13.9821 4.59808L8.01943 14.7622C7.45756 15.72 7.78313 16.9521 8.74479 17.5074V17.5074C9.6965 18.0568 10.9132 17.7359 11.4701 16.7885L16.6962 7.89711" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}