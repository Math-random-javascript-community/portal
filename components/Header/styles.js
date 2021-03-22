import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 10px;
  width: 100%;

  .mainMenuBtn {
    display: none;
  }

  .login-icon {
  
  & [fill] {
    fill: black;
  }
}

  @media ${device.tablet} {
    flex-direction: column;

    .mainMenuBtn {
      display: flex;
    }
  }
`;

export const MenuItems = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: flex-start;

  @media ${device.tablet} {
    flex-direction: column;
    margin: 47px 0 0;
  }
`;

export const Logo = styled.div`
  margin-top: 10px;
  margin-left: 20px;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const UserWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  > * {
    margin-left: 16px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;

    > * {
      margin-bottom: 5px;
      margin-left: 0;
    }
  }
`;