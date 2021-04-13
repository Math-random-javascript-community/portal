import React from 'react';
import styled from 'styled-components';
import { TextH2, TextSmall, TextSubtitle } from '../common/Text';
import { TextInput } from '../common/Input';
import { PrimaryButton } from '../common/Button';
import { CustomLink } from '../common/CustomLink';
import { useState } from 'react';

const Wrapper = styled.div`
  padding: 32px;
  text-align: center;
  background: ${({ theme }) => theme.digestItem.backgroundColor};

  & .subscribe-title {
    margin-bottom: 27px;
  }

  & .subscribe-description {
    color: ${({ theme }) => theme.text.bodyColor};
  }
`;

const AdditionalInfo = styled.div`
  font-size: 14px;
  margin: 27px;
  text-align: center;

  & .dash {
    margin: 0 5px;
  }

  & .link {
    font-size: 14px;
    line-height: 16px;
  }
`;

const FormWrapper = styled.div`
  width: 249px;
  margin: 27px auto;

  & .form-item {
    margin-bottom: 32px;
  }
`;

const DigestSubscribe = () => {
  const [email, setEmail] = useState('');
  return (
    <Wrapper>
      <TextH2>Math.random() community</TextH2>
      <TextH2 className="subscribe-title">Javascript Digest</TextH2>
      <TextSubtitle className="subscribe-description">
        A newsletter of JavaScript articles, news and cool projects
      </TextSubtitle>
      <FormWrapper>
        <TextInput
          name="email"
          placeholder="Type your email here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-item"
        />
        <PrimaryButton text="Subscribe" type="button" />
      </FormWrapper>
      <AdditionalInfo>
        <TextSmall>173672 subscribers</TextSmall>
        <TextSmall className="dash">—</TextSmall>
        <CustomLink className="link" url="" title="517 issues" />
        <TextSmall className="dash">—</TextSmall>
        <CustomLink className="link" url="" title="RSS Feed" />
      </AdditionalInfo>
    </Wrapper>
  );
};

export default DigestSubscribe;
