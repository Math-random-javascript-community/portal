import styled from 'styled-components';
import { Button } from './Button';

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.button.primaryBackground};
  color: ${({ theme }) => theme.button.primaryColor};
`;
