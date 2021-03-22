import Image from 'next/image';
import {LogoSolidProps} from './Logo.interface';

export function LogoSolid({alt}: LogoSolidProps) {
  return (
    <Image
      src="/logo/LogoSolid.svg"
      layout="fixed"
      alt={alt}
      width="170"
      height="40"
      id="topLogo"
    />
  );
}
