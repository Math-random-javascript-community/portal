import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import Link from 'next/link';
import { Image } from '../common/Image';
import { DigestType } from '../../interfaces';
import { TextH3 } from '../common/Text';
import { Icon, IconSizes, IconTypes } from '../common/Icon';
import { Text } from '../common/Text';
import { device } from '../../styles/mediaQueries';

const Wrapper = styled.div`
  margin-top: 32px;
  padding: 18px 16px;
  background: ${({ theme }) => theme.digestItem.backgroundColor};
  cursor: pointer;
`;

const Description = styled.div`
  margin-top: 16px;
  color: ${({ theme }) => theme.text.secondaryColor};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  & .digest-date {
    margin-right: 16px;
    margin-left: 9px;
  }

  & .digest-number,
  .digest-date {
    color: ${({ theme }) => theme.text.activeColor};
  }
`;

const StyledContent = styled.div`
  display: flex;
  margin-top: 16px;

  & .item-info {
    margin-left: 16px;
  }

  & .item-image {
    min-width: 214px;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;

    & .item-image {
      width: 100%;
    }

    & .item-info {
      margin-left: 0;
    }
  }
`;

interface DigestItemProps {
  item: DigestType;
}

const DigestItem = ({ item }: DigestItemProps) => {
  return (
    <Link href={`/digests/${item?.id}`}>
      <Wrapper>
        <StyledHeader>
          <Icon iconType={IconTypes.Date} size={IconSizes.Medium} isActive={true} />
          <Text className="digest-date">
            {item?.digest_date && format(new Date(item.digest_date), 'dd.MM.yy')}
          </Text>
          <TextH3 className="digest-number">Digest 11</TextH3>
        </StyledHeader>
        <StyledContent>
          <div className="item-image">
            <Image src=""/>
          </div>
          <div className="item-info">
            <TextH3>{item?.title}</TextH3>
            <Description>{item?.description}</Description>
          </div>
        </StyledContent>
      </Wrapper>
    </Link>
  );
};

export default DigestItem;
