import React from 'react';
import styled from 'styled-components';
import {EventType} from '../../interfaces';
import EventItem from './EventItem';
import EventItemProvider from './EventItemProvider';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledItem = styled.div`
  width: 350px;
`;

type Props = {
  data: EventType[],
  type: string,
  errors?: string
}

const EventList = ({data, type}: Props) => (
  <Wrapper>
    {data && data.map((row) => (
      <StyledItem key={row.Id}>
        <EventItemProvider data={row}>
          <EventItem isLinked={true} type={type}/>
        </EventItemProvider>
      </StyledItem>
    ))}
    {data.length % 3 != 0 && (<StyledItem/>)}
  </Wrapper>
);

export default EventList;