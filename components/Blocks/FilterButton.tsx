import styled from 'styled-components';
import FilterDefault from './FilterDefault';
import React, {ReactNode} from 'react';

const Button = styled(FilterDefault)`
/* filter */


// position: static;
// width: 46px;
// height: 11px;
// left: 16px;
// top: 16px;

/* Button */

font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 11px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

/* Crystal White */

color: #FFFFFF;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;
`;

type Props = {
    title: string
}
const FilterButton = ({title}: Props) => (
  <Button>{title}</Button>
);
 
export default FilterButton;