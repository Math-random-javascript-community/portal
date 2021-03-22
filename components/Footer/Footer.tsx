import styled from 'styled-components';
import React from 'react';
import { Text } from '../common/Text';
import { Icon, IconSizes, IconTypes } from '../common/Icon';
import { device } from '../../styles/mediaQueries';

const MediaIcons = styled.div`
  margin-bottom: 20px;
  height: 64px;
  display: flex;
  justify-content: center;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  & .footer-text {
    margin: auto;
    max-width: 355px;
  }

  & .media-link {
    display: flex;
    align-items: center;
    margin-right: 34px;

    & > * {
      margin-right: 10px;
    }
  }

  @media ${device.tablet} {
    & .icon-text {
      display: none;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <MediaIcons>
      <a href="youtube.com" target="_blank" className="media-link">
        <Icon iconType={IconTypes.Youtube} size={IconSizes.Medium} />
        <Text className="icon-text">Youtube</Text>
      </a>
      <a href="youtube.com" target="_blank" className="media-link">
        <Icon iconType={IconTypes.Telegram} size={IconSizes.Medium} />
        <Text className="icon-text">Telegram</Text>
      </a>
      <a href="youtube.com" target="_blank" className="media-link">
        <Icon iconType={IconTypes.Facebook} size={IconSizes.Medium} />
        <Text className="icon-text">Facebook</Text>
      </a>
      <a href="youtube.com" target="_blank" className="media-link">
        <Icon iconType={IconTypes.Mail} size={IconSizes.Medium} />
        <Text className="icon-text">Email</Text>
      </a>
      <a href="youtube.com" target="_blank" className="media-link">
        <Icon iconType={IconTypes.Twitter} size={IconSizes.Medium} />
        <Text className="icon-text">Twitter</Text>
      </a>
    </MediaIcons>
    <div className="footer-text">
      <Text>
        We like to speak to you and share useful content. Follow us through the links below and be
        happy.
      </Text>
    </div>
  </StyledFooter>
);

export default Footer;
