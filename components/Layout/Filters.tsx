import React from 'react';
import styled from 'styled-components';
import {FilterButton} from '../Blocks';
import {FilterType} from '../../interfaces';
import {FilterItemProvider} from '../Filters';

const FiltersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 20px;
`;
const data: FilterType[] = [
  {
    id: 0,
    'title': 'ALL',
    'status': "all"
  }, 
  {
    id: 1,
    'title': 'VUE',
    'status': "active"
  },
  {
    id: 2,
    'title': 'EXPRESS',
    'status': "default"
  },
  {
    id: 3,
    'title': 'PHP',
    'status': "default"
  },
  {
    id: 4,
    'title': 'JAVA',
    'status': "default"
  }
];

const Filters = () => (
  <FiltersList>
    <FilterItemProvider items={data}>
      {data && data.map((row) => (
        <FilterButton key={row.id} title={row.title} status={row.status}/>
      ))}
    </FilterItemProvider>
  </FiltersList>
);

export default Filters;