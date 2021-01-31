import styled from 'styled-components';
import { Button } from "./Button";

export const StandardButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.button.standardBorderColor};
  background: ${({ theme }) => theme.button.standardBackground};
  color: ${({ theme }) => theme.button.standardColor};
;`
