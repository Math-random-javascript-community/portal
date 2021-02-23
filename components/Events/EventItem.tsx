import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {EventType} from '../../interfaces';
import {EventDate, TopicButton} from '../Blocks';
import {useEvent} from './EventItemProvider';

const Wrapper = styled.div`
  margin-top: 30px;
`;
const Media = styled.div`
  width: 350px;
`;
const ItemHeader = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
`;
const StyledContent = styled.div`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
`;
const StyledButton = styled(TopicButton)`
  margin-top: 10px;
`;
const StatusWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  color: ${props => props.type == 'past' ? 'rgba(255, 255, 255, 0.6)' : 'inherit'};
`;
const DateWrapper = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  color: ${props => props.type == 'past' ? 'rgba(255, 255, 255, 0.6)' : 'inherit'};
`;
const StyledIcon = styled.img`
  margin-right: 10px;
  height: 19px;
  width: 21px;
`;

type itemProps = {
  isLinked?: boolean,
  type: string
}
const EventItem = ({isLinked, type}: itemProps) => {
  const item: EventType = useEvent();
  return (
    <Wrapper>
      <Media as="a" href={`/events/${item.Id}`}>
        <img alt={item.title} src={'/event_img.png'}/>
      </Media>
      <ItemHeader>
        <DateWrapper type={type}>
          <StyledIcon src={'/Vector.png'}/>
          <EventDate dateString={item.event_date}/>
        </DateWrapper>
        {item.location && (
          <StatusWrapper type={type}>
            <StyledIcon src={'/Active.png'}/>
            {type == 'upcoming' && (
              <Link href={item.location}>Online</Link>
            ) || (
              <div>Online</div>
            )}
          </StatusWrapper>
        )}
      </ItemHeader>
      {isLinked && (
        <Link href={`/events/${item.Id}`}>
          <a><StyledContent dangerouslySetInnerHTML={{__html: item.description}}/></a>
        </Link>
      ) || (
        <StyledContent dangerouslySetInnerHTML={{__html: item.description}}/>
      )}

      {type == 'upcoming' && (
        <StyledButton primary onClick={() => alert('Registering')}>Register</StyledButton>
      )}
      {type == 'past' && (
        <Link href={`/events/${item.Id}`}>
          <a>
            <StyledButton>Details</StyledButton>
          </a>
        </Link>
      )}
    </Wrapper>
  );
};

export default EventItem;