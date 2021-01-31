import styled from 'styled-components';
import { Button } from './Button';

export const SecondaryButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.button.secondaryBorderColor};
  background: ${({ theme }) => theme.button.secondaryBackground};
  color: ${({ theme }) => theme.button.secondaryColor};
;`
