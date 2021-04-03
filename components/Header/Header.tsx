import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MenuItem } from '../common/MenuItem';
import { SecondaryButton } from '../common/Button';
import { Wrapper, MenuItems, UserWrapper } from './styles';
import { LoginButton } from '../common/LoginButton';
import Link from 'next/link';
import { Icon, IconSizes, IconTypes } from '../common/Icon';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { device } from '../../styles/mediaQueries';
import { Logo } from '../common/Logo';

const Header = () => {
  const router = useRouter();
  const isTablet = useMediaQuery(device.tablet);
  const [isTabletMenuDisplayed, setIsTabletMenuDisplayed] = useState(false);

  const handleMenuIconClick = () => {
    console.log('clicked');
    setIsTabletMenuDisplayed(!isTabletMenuDisplayed);
  };

  return (
    <header>
      <Wrapper>
        <div className="top-row">
          <Link href={'/'}>
            <a>
              <Logo />
            </a>
          </Link>
          {isTablet && !isTabletMenuDisplayed && (
            <Icon iconType={IconTypes.Menu} size={IconSizes.Medium} onClick={handleMenuIconClick} />
          )}
          {isTablet && isTabletMenuDisplayed && (
            <Icon
              iconType={IconTypes.Cross}
              size={IconSizes.Medium}
              onClick={handleMenuIconClick}
            />
          )}
        </div>
        {isTablet && !isTabletMenuDisplayed ? null : (
          <>
            <MenuItems>
              <MenuItem href="/events" text="Events" active={router.pathname === '/events'} />
              <MenuItem href="/digests" text="Digests" active={router.pathname === '/digests'} />
            </MenuItems>
            <UserWrapper>
              <SecondaryButton text="Sign up" type="button" />
              <LoginButton />
            </UserWrapper>
          </>
        )}
      </Wrapper>
    </header>
  );
};

export default Header;
