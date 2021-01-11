import styled from 'styled-components';
import React from 'react';
import {FilterStatusType} from '../../interfaces'

const FilterDefault = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  
  height: 43px;

  background: #333333;

  border: 1px solid #FFE400;
  box-sizing: border-box;
  border-radius: 32px;

`;
const Button = styled(FilterDefault)`
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

  color: #FFFFFF;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const AllButton = styled(Button)`
  color: #333333;
  background: #FFE400;
`;
const ActiveButton = styled(Button)`
  color: #FFE400;
`;

const CloseFilter = styled.span`
  font-size: smaller;
  margin: 0 5px; 
`;

type Props = {
  title: string
  status: FilterStatusType
}
const FilterButton = ({title, status}: Props) => (
  <>
    {status == 'all' && (<AllButton>{title}</AllButton>)}
    {status == 'active' && (<ActiveButton>{title}<CloseFilter>x</CloseFilter></ActiveButton>)}
    {status == 'default' && (<Button>{title}</Button>)}
  </>
);

export default FilterButton;