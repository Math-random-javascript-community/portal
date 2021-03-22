import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Button';
import { Icon, IconTypes, IconSizes } from '../Icon';

const StyledLoginButton = styled.div`
  min-width: 108px;

  & .login-icon {
    margin-right: 7px;
  }
`;

export const LoginButton = () => (
  <StyledLoginButton>
    <PrimaryButton text="Login" type="button">
      <Icon className="login-icon" iconType={IconTypes.Login} size={IconSizes.Medium} />
    </PrimaryButton>
  </StyledLoginButton>
);
