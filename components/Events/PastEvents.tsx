import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {EventType} from '../../interfaces';
import {EventsList} from './index';
import {Title} from '../Blocks';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const StyledList = styled.div`
  margin-top: 10px;
`;
const StyledAllLinks = styled.div`
  margin-top: 20px;
  text-align: center;
`;

type Props = {
  eventList: EventType[],
  errors: string
}

const PastEvents = ({eventList, errors}: Props) => (
  <Wrapper>
    <Title>Past events</Title>
    <StyledList>
      <EventsList data={eventList} errors={errors} type={'past'}/>
    </StyledList>
    <StyledAllLinks>
      <Link href={'/events/past'}>See all events</Link>
    </StyledAllLinks>
  </Wrapper>
);

export default PastEvents;