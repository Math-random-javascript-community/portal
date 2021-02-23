import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {EventType} from '../../interfaces';
import {EventDate} from '../Blocks';
import {Talk} from '../Talks';
import {useEvent} from './EventItemProvider';
import TalksList from './TalksList';

/**
 * Styles
 */
const Wrapper = styled.div`
`;

const Header = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
`;
const Description = styled.div`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
`;
const StatusWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;
const DateWrapper = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
`;
const StatusIcon = styled.img`
  margin-right: 10px;
  height: 19px;
  width: 21px;
`;
const Address = styled.div`
`;
const Summary = styled.div`
  color: darkslategray;
`;

const Event = () => {
  const item: EventType = useEvent();

  return (
    <Wrapper>
      <Header>
        <DateWrapper>
          <StatusIcon src={'/Vector.png'}/>
          <EventDate dateString={item.event_date}/>
        </DateWrapper>
        {item.location && (
          <StatusWrapper>
            <StatusIcon src={'/Active.png'}/>
            <Link href={item.location}>Online</Link>
          </StatusWrapper>
        )}
      </Header>
      <Address>{item.address}</Address>
      <Description dangerouslySetInnerHTML={{__html: item.description}}/>
      <TalksList talks={item.talks}/>
      <Summary>{item.summary}</Summary>
    </Wrapper>
  );
};

export default Event;