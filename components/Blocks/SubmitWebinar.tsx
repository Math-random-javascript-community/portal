import React from 'react';
import styled from 'styled-components';
import {TopicButton} from './index';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 154px;
  background: #333333;
`;

const SubmitButton = styled(TopicButton)`
  background: #06FFBB;
  border: 1px solid #06FFBB;
  color: #000000;
  width: 256px;
  height: 40px;
  text-transform: uppercase;
`;
const Title = styled.div`
  color: #FFFFFF;
  width: 466px;
  height: 40px;
  text-transform: uppercase;
  align-self: center;
`;

const SubmitWebinar = () => (
  <Wrapper>
    <Title>Do you have an idea for a webinar?</Title>
    <SubmitButton>Submit</SubmitButton>
  </Wrapper>
);

export default SubmitWebinar;