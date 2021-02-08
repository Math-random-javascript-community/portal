type PropsType = {
    className?: string
  };
export default function Twitter({className}: PropsType) {
  return (
    <svg className={`fillImg ${className}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.6123 17.2618C16.2121 18.6284 14.313 19.3961 12.3328 19.3961C10.3526 19.3961 8.45357 18.6284 7.05338 17.2618C5.65318 15.8952 4.86656 14.0416 4.86656 12.109C4.86656 10.1763 5.65318 8.32277 7.05338 6.95616C8.45357 5.58955 10.3526 4.82179 12.3328 4.82179C14.313 4.82179 16.2121 5.58955 17.6123 6.95616C19.0125 8.32277 19.7991 10.1763 19.7991 12.109C19.7991 14.0416 19.0125 15.8952 17.6123 17.2618ZM3 12.109C3 17.1399 7.1783 21.2179 12.3328 21.2179C17.4873 21.2179 21.6656 17.1399 21.6656 12.109C21.6656 7.07808 17.4873 3 12.3328 3C7.1783 3 3 7.07808 3 12.109ZM16.7374 8.62203C16.6016 9.10545 16.3242 9.48557 15.9053 9.76406C16.2821 9.70698 16.6501 9.59498 16.9992 9.43111C16.7407 9.84723 16.418 10.2121 16.0452 10.5097V10.7725C16.0458 11.7272 15.8375 12.6684 15.4376 13.5192C15.0332 14.3985 14.4038 15.1452 13.5509 15.7505C12.6981 16.3591 11.7182 16.6634 10.6092 16.6634C9.5256 16.6634 8.54623 16.3563 7.6664 15.7376C7.76024 15.7555 7.91526 15.7589 8.13405 15.7589C9.02736 15.7589 9.81698 15.4686 10.5076 14.8819C10.1041 14.8751 9.75932 14.7657 9.39184 14.4647C9.02854 14.1671 8.76402 13.9403 8.54135 13.5103C8.15179 12.7581 7.95805 12.1652 7.95805 11.3032C7.95805 10.4292 7.95805 9.72662 8.31707 8.83875C9.3571 10.2177 10.6771 10.9342 12.2719 10.9931C12.2314 10.8617 12.2112 10.7068 12.2112 10.5333C12.2074 10.2612 12.2549 9.99113 12.3508 9.73963C12.4467 9.48812 12.5891 9.26048 12.7691 9.07064C13.1419 8.67087 13.5986 8.46537 14.1394 8.46537C14.6926 8.46537 15.154 8.68098 15.5185 9.10545C15.9442 9.00895 16.3548 8.84611 16.7374 8.62203Z"/></svg>
  );
}