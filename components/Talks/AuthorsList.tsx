import React from 'react';
import styled from 'styled-components';
import {AuthorType} from '../../interfaces';
import {Author} from '../Authors';

const Wrapper = styled.div`
  margin-top: 5px;
`;

type AuthorsListProps = {
  authors: AuthorType[]
}

const AuthorsList = ({authors}: AuthorsListProps) => {

  return (
    <Wrapper>
      {authors && authors.length > 0 && (
        <div>Author{(authors.length > 1) ? 's' : ''}:</div>
      )}
      {authors && authors.map((row, id) => (
        <Author key={id} item={row}/>
      ))}
    </Wrapper>
  );
};

export default AuthorsList;