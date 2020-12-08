import React, { ReactNode } from 'react';
//import styles from '../../styles/Home.module.css';
// import styles from './footer.module.css';
import styled from 'styled-components';



type Props = {
    children?: ReactNode
}

const Footer = ({ children }: Props) => (
  <footer>
    <div><h2>Footer</h2></div>
    <div>Footer content: {children}</div>
  </footer>
);

const StyledFooter = styled(Footer)`
  text-align: center;
  color: green;
`;
// export Footer;
export default StyledFooter;