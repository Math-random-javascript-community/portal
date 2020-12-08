import styled from 'styled-components';
import {FilterButton} from '../Blocks';
import React from 'react';

const FiltersList = styled.div`

`;

type Filter = {
  id: number
  title: string
}
type Props = {
  data: Filter[]
}

const Filters = ({data}: Props) => (
  <FiltersList>
    {data && data.map((row) => (
      <FilterButton key={row.id} title={row.title}/>
    ))}

  </FiltersList>
);

export default Filters;