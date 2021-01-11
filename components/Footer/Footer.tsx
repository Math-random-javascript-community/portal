import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import {getPopularShortcuts} from '../../lib/shortcuts';

const Wrapper = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
`;

const Shortcuts = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Contacts = styled.div`
  font-size: 16px;
  width: 432px;
`;

const ShortcutItem = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 11px;
  text-transform: uppercase;
  height: 25px;
  width: 98px;
`;
const ShortcutTitle = styled.div`
  padding-bottom: 25px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;
const EmailIcon = styled.img`
  margin-right: 10px;
  height: 46px;
  width: 57px;
`;
const MediaIcon = styled.img`
  height: 54px;
  width: 54px;
`;
const MediaIcons = styled.div`
  margin-bottom: 20px;
  height: 64px;
  display: flex;
  justify-content: space-around;
`;
const SocialMedia = styled.div`
  width: 432px;
`;
const EmailWrapper = styled.div`
  margin-top: 30px;
  width: 432px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const popularShortcuts = getPopularShortcuts();

const Footer = () => (
  <footer>
    <Wrapper>
      <Shortcuts>
        <ShortcutTitle>Popular shortcuts</ShortcutTitle>
        {popularShortcuts && popularShortcuts.map((row, id) => (
          <ShortcutItem key={id}><Link href={`/popular_shortcuts/${id}`}>{row}</Link></ShortcutItem>
        ))}
      </Shortcuts>

      <Contacts>
        <SocialMedia>
          <MediaIcons>
            <MediaIcon src={'/Telegram Disable.png'}/>
            <MediaIcon src={'/FB Disable.png'}/>
            <MediaIcon src={'/Youtube Disable.png'}/>
          </MediaIcons>
          <div>We like to speak to you and share useful content. Follow us through the links below and be happy.</div>
        </SocialMedia>

        <EmailWrapper>
          <EmailIcon src={'/MailDisable.svg'}/>
          Email us: <Link href={'mailto: math.random@mathrandom.com'}>math.random@mathrandom.com</Link>
        </EmailWrapper>
      </Contacts>
    </Wrapper>
  </footer>
);

export default Footer;
