import React from 'react';
import styled from 'styled-components';
import {TopicButton} from '../Blocks';
import SubscribeInput from '../Blocks/SubscribeInput';

const Wrapper = styled.div`
  margin-top: 30px;
  width: 540px;
  height: 520px;
  background: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 750px) {
    width: 350px;
  }
`;
const Title = styled.div`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
`;
const Description = styled.div`
  margin-top: 20px;
  padding: 0 50px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
const StyledButton = styled(TopicButton)`
  margin-top: 30px;
  width: 350px;
`;
const StyledEmail = styled(SubscribeInput)`
  margin-top: 30px;
  width: 350px;
`;
const Stats = styled.div`
  margin-top: 20px;
  color: #FFFFFF;
  width: 476px;
  font-size: 14px;
  text-align: center;
  
  .accent {
    color: yellow;
  } 
`;

const Subscribe = () => {

  return (
    <Wrapper>
      <Title>JavaScript Weekly</Title>
      <Description>A newsletter of JavaScript articles, news and cool projects</Description>
      <StyledEmail type={"text"} defaultValue="Type your email address here"/>
      <StyledButton primary>Subscribe</StyledButton>
      <Stats>173672 subscribers — <span className="accent">517 issues</span> — <span className="accent">RSS feed</span>
      </Stats>
    </Wrapper>
  );
};

export default Subscribe;