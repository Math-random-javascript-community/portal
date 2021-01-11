import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {DigestType} from '../../interfaces';
import {useDigest} from './DigestItemProvider';

const Wrapper = styled.div`
  margin-top: 30px;
`;
const Title = styled.div`
  color: #ffe400;
`;
const Description = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

const DigestItem = () => {
  const item: DigestType = useDigest();

  return (
    <Wrapper>
      <Title><Link href={`/digests/${item.Id}`}>{item.title}</Link></Title>
      <Description>{item.description}</Description>
    </Wrapper>
  );
};

export default DigestItem;