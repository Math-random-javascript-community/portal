import styled from 'styled-components';

const TopicButton = styled.button`
  background: ${props => props.primary ? '#FFE400' : '#333333'};
  color: ${props => props.primary ? '#000000' : '#FFE400'};

  font-family: Ubuntu;
  font-style: normal;
  border-radius: 4px;
  border: 1px solid #FFE400;
  width: 100%;
  height: 43px;
  font-weight: bold;
  line-height: 11px;
  font-size: 10px;
  text-transform: uppercase;
`;

export default TopicButton;