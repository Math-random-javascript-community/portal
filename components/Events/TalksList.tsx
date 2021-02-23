import React from 'react';
import styled from 'styled-components';
import {Talk} from '../Talks';
import {TalkType} from '../../interfaces';

/**
 * Styles
 */
const Wrapper = styled.div`
`;
const ItemWrapper = styled.div`
  width: 350px;
`;

type PropsType = {
  talks: TalkType[]
}

const Event = ({talks}:PropsType) => {

  return (
    <Wrapper>
      {talks && talks.map((row) => (
        <ItemWrapper key={row.Id}>
          <Talk item={row}/>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default Event;