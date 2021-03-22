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
            <img src={'/logo.svg'} alt={SITE_TITLE} />
          </Logo>
        </Link>
        <MenuItems>
          <Link href="/events">
            <a>
              <MenuItem text="Events" active={router.pathname === '/events'} />
            </a>
          </Link>
          <Link href="/digests">
            <a>
              <MenuItem text="Digests" active={router.pathname === '/digests'} />
            </a>
          </Link>
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
