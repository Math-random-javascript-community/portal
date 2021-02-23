import React from 'react';
import styled from 'styled-components';
import {TopicButton} from './index';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 154px;
  background: #333333;
`;

const SubmitButton = styled(TopicButton)`
  background: #06FFBB;
  border: 1px solid #06FFBB;
  color: #000000;
  width: 256px;
  height: 40px;
  text-transform: uppercase;
  margin: 0px 5px;
`;
const Title = styled.div`
  color: #FFFFFF;
  min-width: 370px;
  text-transform: uppercase;
  margin: 0px 5px;
  text-align: center;
`;

const SubmitWebinar = () => (
  <Wrapper>
    <Title>Do you have an idea for a webinar?</Title>
    <SubmitButton>Submit</SubmitButton>
  </Wrapper>
);

export default SubmitWebinar;