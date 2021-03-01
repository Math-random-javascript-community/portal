import Image from 'next/image';
import {LogoSolidProps} from './Logo.interface';

function LogoImgTop({alt}: LogoSolidProps) {
  return (
    <Image
      src="/logo/LogoTop.svg"
      layout="fixed"
      alt={alt}
      width="170"
      height="25"
      id={'topLogoImg'}
    />
  );
}

export default LogoImgTop;