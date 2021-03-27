import React from 'react';
import { useRouter } from 'next/router';
import { SITE_TITLE } from '../../constants/main';
import { MenuItem } from '../common/MenuItem';
import { SecondaryButton } from '../common/Button';
import { Wrapper, Logo, MenuItems, UserWrapper } from './styles';
import { LoginButton } from '../common/LoginButton';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <Wrapper>
        <Link href={'/'}>
          <Logo>
            <img src={'/logo/LogoSolid.svg'} alt={SITE_TITLE} />
          </Logo>
        </Link>
        <MenuItems>
          <MenuItem href="/events" text="Events" active={router.pathname === '/events'} />
          <MenuItem href="/digests" text="Digests" active={router.pathname === '/digests'} />
        </MenuItems>
        <UserWrapper>
          <SecondaryButton text="Sign up" type="button" />
          <LoginButton />
        </UserWrapper>
      </Wrapper>
    </header>
  );
};

export default Header;
