import React from 'react';
import styled from 'styled-components';
import {DigestType} from '../../interfaces';
import DigestItem from './DigestItem';
import DigestProvider from './DigestItemProvider';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  data: DigestType[],
  errors?: string
}

const DigestList = ({data}: Props) => (
  <Wrapper>
    {data && data.map((row) => (
      <DigestProvider key={row.Id} data={row}>
        <DigestItem />
      </DigestProvider>
    ))}
  </Wrapper>
);

export default DigestList;