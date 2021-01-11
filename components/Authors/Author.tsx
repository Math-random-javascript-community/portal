import React from 'react';
import styled from 'styled-components';
import {AuthorType} from '../../interfaces';

const Wrapper = styled.div`
  border: 1px solid darkslategray;
`;

const Name = styled.div`
  color: darkgrey;
  font-size: 0.7em;
`;

const Photo = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

type PropsType = {
  item: AuthorType
}

const Author = ({item}: PropsType) => {

  return (
    <Wrapper>
      <Name>{item.name}</Name>
      {item.photo && item.photo.map((photoItem, id) => (
        <Photo key={id}><img src={photoItem.url} alt={item.name}/></Photo>
      ))}
    </Wrapper>
  );
};

export default Author;