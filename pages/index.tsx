import React from 'react';
import styled from 'styled-components';
import {GetStaticProps} from 'next';
import Link from 'next/link';
import {REVALIDATE_TIME} from '../constants/main';
import {DigestType, FilterType, EventType} from '../interfaces';

import Layout from '../components/Layout/Layout';
import {DigestsList} from '../components/Digests';
import {getDigestList} from '../lib/digests';
import {getPastEventList, getUpcomingEventList} from '../lib/events';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import PastEvents from '../components/Events/PastEvents';
import {ErrorsContainer, Title} from '../components/Blocks';

const Wrapper = styled.div`
  display: flex;
`;
const TopWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const LastDigestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 451px;
`;
const LastDigestTitle = styled(Title)`
  align-self: flex-start;
`;
const History = styled.div`
  align-self: flex-end;
  font-size: 16px;
  color: #FFE400;
`;
const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subscribe = styled.div`
  margin-top: 20px;
`;

type HomeProps = {
  digestList: DigestType[]
  filtersList: FilterType[]
  upcomingEventList: EventType[]
  pastEventList: EventType[]
  errors: string
}

export default function Home(props: HomeProps) {
  return (
    <Wrapper>
      <Layout isHome={true}>
        {props.errors && (<ErrorsContainer>Error loading data: {props.errors}</ErrorsContainer>)}
        <TopWrapper>
          <LastDigestWrapper>
            <LastDigestTitle>Last digest</LastDigestTitle>
            <DigestsList data={props.digestList} errors={props.errors}/>
          </LastDigestWrapper>
          <SubscribeWrapper>
            <History>
              <Link href={"/history"}>History</Link>
            </History>
            <Subscribe><img src={'/SubscribeDiv.png'}/></Subscribe>
          </SubscribeWrapper>
        </TopWrapper>
        <UpcomingEvents eventList={props.upcomingEventList} errors={props.errors}/>
        <PastEvents eventList={props.pastEventList} errors={props.errors}/>
      </Layout>
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const digestList = await getDigestList(1);

    const upcomingEventList = await getUpcomingEventList(3);
    const pastEventList = await getPastEventList(6);

    return {
      props: {
        digestList: digestList ?? [],
        upcomingEventList: upcomingEventList ?? [],
        pastEventList: pastEventList ?? []
      },
      revalidate: REVALIDATE_TIME,
    };
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    };
  }
};