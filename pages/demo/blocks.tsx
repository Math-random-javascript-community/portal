import styled from 'styled-components';
import React from 'react';
import {Icon, IconSizes, IconTypes} from '../../components/common/Icon';

const StyledTitle = styled.div`
  margin-top: 10px;
  font-size: 28px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
`;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.body.backgroundColor};
  margin-top: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid green;
  justify-content: center;
  align-items: center;
`;

export default function Demo() {

  return (
    <Wrapper>
      <StyledTitle>Icons</StyledTitle>
      <Icon iconType={IconTypes.Dropdown} text={'Dropdown'} isTextOnLeft={true} width={100} height={100}/>
      <Icon iconType={IconTypes.Cross} isActive={true} size={IconSizes.ExtraSmall}/>
      <Icon iconType={IconTypes.Cross}/>
      <Icon iconType={IconTypes.Cross} size={IconSizes.Small}/>
      <Icon iconType={IconTypes.Check} size={IconSizes.Large}/>
      <Icon iconType={IconTypes.Checked} size={IconSizes.Large}/>
      <Icon iconType={IconTypes.AttachFile} isActive={true} text={'Attach file'} size={IconSizes.Small}/>
      <Icon iconType={IconTypes.AttachFile} isActive={false} text={'Attach file'} size={IconSizes.Medium}/>
      <Icon iconType={IconTypes.AttachFile} isActive={true} text={'Attach file'} size={IconSizes.Large}/>
      <Icon iconType={IconTypes.Date} className={'iconSelected'}/>
      <Icon iconType={IconTypes.Date} isActive={true}/>
      <Icon iconType={IconTypes.Login} text={'Login'} size={IconSizes.Large} isTextOnLeft={true}/>
      <Icon iconType={IconTypes.Login} text={'Login'} isActive={true} size={IconSizes.Large}/>
      <Icon iconType={IconTypes.Login} isActive={true}/>
      <Icon iconType={IconTypes.Register}/>
      <Icon iconType={IconTypes.Mail}/>
      <Icon iconType={IconTypes.Mail} isActive={true}/>
      <Icon iconType={IconTypes.Menu}/>
      <Icon iconType={IconTypes.Menu} isActive={true}/>
      <Icon iconType={IconTypes.Dropdown}/>
      <Icon iconType={IconTypes.Language}/>
      <Icon iconType={IconTypes.Cross}/>
      <Icon iconType={IconTypes.AttachFile}/>
      <Icon iconType={IconTypes.Time}/>
      <Icon iconType={IconTypes.Telegram}/>
      <Icon iconType={IconTypes.FB}/>
      <Icon iconType={IconTypes.FB} isActive={true} text={'FB'} size={IconSizes.Large}/>
      <Icon iconType={IconTypes.FB} size={IconSizes.Medium}/>
      <Icon iconType={IconTypes.FB} size={IconSizes.Large}/>
      <Icon iconType={IconTypes.GitHub}/>

      <Icon iconType={IconTypes.Twitter}/>
      <Icon iconType={IconTypes.Youtube} size={IconSizes.Small}/>
      <Icon iconType={IconTypes.Youtube} size={IconSizes.Large}/>
    </Wrapper>
  );
}
