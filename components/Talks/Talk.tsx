import React from 'react';
import styled from 'styled-components';
import {TalkType} from '../../interfaces';
import {TalkDate} from '../Blocks';
import AuthorsList from './AuthorsList';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Lang = styled.div`
  font-size: 0.7em;
  margin-left: 10px;
`;

const Content = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

type TalkProps = {
  item: TalkType
}

const Talk = ({item}: TalkProps) => {

  return (
    <Wrapper>
      <Header>
        <TalkDate dateString={item.talk_date} timeOnly={true}/>
        <Lang>Language: {item.language}</Lang>
      </Header>
      <Content>{item.description}</Content>
      <AuthorsList authors={item.authors}/>
    </Wrapper>
  );
};

export default Talk;