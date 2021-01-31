import styled from 'styled-components';
import { Button } from './Button';

export const PositiveButton = styled(Button)`
  background: ${({ theme }) => theme.button.positiveBackground};
  color: ${({ theme }) => theme.button.positiveColor};
;`
