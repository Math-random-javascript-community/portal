import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {FiltersLayout} from '../Layout';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TopLinks = styled.div`
  text-align: center;
  font-size: 16px;
`;

const Logo = styled.section`
  margin-top: 10px;
`;

const LinkedText = styled.a`
  padding: 0 0.5em;
  font-size: 16px;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
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

const Header = ({isHome}: Props) => (
  <header>
    <Wrapper>
      {!isHome ? (
        <Logo as="a" href="/"><img src={'/logo.svg'}/></Logo>
      ) : (
        <Logo><img src={'/logo.svg'}/></Logo>
      )}
      <TopLinks>
        <LinkedText href="/events/upcoming">Upcoming events</LinkedText>
        <LinkedText href="/events/past">Past events</LinkedText>
        <LinkedText href="/digests/all">Digest</LinkedText>
      </TopLinks>
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
    </Wrapper>
    <Title>Topics and events by technology</Title>
    <FiltersLayout/>
  </header>
);

export default Header;