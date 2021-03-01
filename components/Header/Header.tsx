import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {SITE_TITLE} from '../../constants/main';
import Link from 'next/link';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  .mainMenuBtn {
    display: none;
  }

  @media screen and (max-width: 750px) {
    flex-direction: row;

    .mainMenuBtn {
      //visibility: visible;
      display: flex;
    }
  }
`;
const MenuButton = styled.div`
  width: 24px;
  height: 24px;
  margin: 20px;
  display: flex;
  justify-content: center;
`;
const TopMenu = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const MenuItems = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: flex-start;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const MenuItem = styled.div`
`;

const Logo = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const LinkedText = styled.a`
  padding: 0 0.5em;
  font-size: 16px;
`;

const UserWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Login = styled.div`
  display: flex;
  align-items: center;
`;

const Register = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #FFFFFF;
`;

const StyledIcon = styled.img`
  margin-right: 10px;
`;

type Props = {
  children?: ReactNode
  isHome: boolean
}

const Header = ({isHome=false}: Props) => (
  <header>
    <Wrapper>
      <MenuButton className="mainMenuBtn"><img src={'/MenuActive.png'} alt={'Menu'}/></MenuButton>
      <TopMenu>
        <Logo>
          {!isHome ? (
            <Link href="/"><img src={'/logo.svg'} alt={SITE_TITLE}/></Link>
          ) : (
            <img src={'/logo.svg'} alt={SITE_TITLE}/>
          )}
        </Logo>
        <MenuItems>
          <MenuItem><LinkedText href="/events/upcoming">Upcoming events</LinkedText></MenuItem>
          <MenuItem><LinkedText href="/events/past">Past events</LinkedText></MenuItem>
          <MenuItem><LinkedText href="/digests/all">Digest</LinkedText></MenuItem>
        </MenuItems>
        <UserWrapper>
          <Register>
            <StyledIcon src={'/Register.png'}/>
            <LinkedText href="/register">register</LinkedText>
          </Register>
          <Login>
            <StyledIcon src={'/Login.png'}/>
            <LinkedText href="/login">login</LinkedText>
          </Login>
        </UserWrapper>
      </TopMenu>
    </Wrapper>
    <Title>Topics and events by technology</Title>
  </header>
);

export default Header;