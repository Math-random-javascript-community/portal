type PropsType = {
    className?: string
  };
export default function Google({className}: PropsType) {
  return (
    <svg className={`fillImg ${className}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.2225 18.2225C16.5722 19.8729 14.3339 20.8 12 20.8C9.66609 20.8 7.42778 19.8729 5.77746 18.2225C4.12714 16.5722 3.2 14.3339 3.2 12C3.2 9.66609 4.12714 7.42778 5.77746 5.77746C7.42778 4.12714 9.66609 3.2 12 3.2C14.3339 3.2 16.5722 4.12714 18.2225 5.77746C19.8729 7.42778 20.8 9.66609 20.8 12C20.8 14.3339 19.8729 16.5722 18.2225 18.2225ZM1 12C1 18.0753 5.9247 23 12 23C18.0753 23 23 18.0753 23 12C23 5.9247 18.0753 1 12 1C5.9247 1 1 5.9247 1 12ZM8.90658 10.9385C8.90671 10.9381 8.90683 10.9378 8.90696 10.9374V10.9385H8.90658ZM8.93776 13.1484C8.67113 12.4377 8.66011 11.6564 8.90658 10.9385H8.90586C9.06587 10.4735 9.32864 10.0506 9.67465 9.70114C10.0207 9.35171 10.441 9.08478 10.9044 8.9202C11.3678 8.75562 11.8623 8.69763 12.3512 8.75054C12.8401 8.80345 13.3108 8.9659 13.7283 9.2258L15.5103 7.7672C14.5245 6.94717 13.2824 6.49875 12.0002 6.5C11.121 6.49998 10.2547 6.7107 9.47374 7.11451C8.69281 7.51833 8.02007 8.10346 7.5119 8.82086C7.00373 9.53827 6.67494 10.367 6.55308 11.2377C6.43123 12.1084 6.51987 12.9956 6.81158 13.8249C7.10328 14.6542 7.58954 15.4016 8.2296 16.0043C8.86967 16.6069 9.64488 17.0474 10.4903 17.2887C11.3356 17.5301 12.2266 17.5652 13.0883 17.3913C13.9501 17.2173 14.7576 16.8393 15.4432 16.2889C16.2213 15.6638 16.8148 14.8389 17.1603 13.9025C17.5058 12.966 17.5902 11.9533 17.4045 10.9726H12.1212V13.1484H15.0626C14.7979 13.8517 14.2997 14.4428 13.6513 14.8226C13.24 15.0632 12.7812 15.211 12.3069 15.2558C11.8325 15.3005 11.3541 15.2411 10.9052 15.0816C10.4562 14.9221 10.0475 14.6665 9.70768 14.3326C9.36784 13.9987 9.10508 13.5945 8.93776 13.1484Z"/></svg>
  );
}