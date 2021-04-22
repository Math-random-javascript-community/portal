import React from 'react';
import styled from 'styled-components';
import { DigestType } from '../../interfaces';
import DigestItem from './DigestItem';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface DigestListProps {
  data: DigestType[];
  errors?: string;
}

const DigestList = ({ data }: DigestListProps) => (
  <Wrapper>{data && data.map((item) => <DigestItem key={item.id} item={item} />)}</Wrapper>
);

export default DigestList;
