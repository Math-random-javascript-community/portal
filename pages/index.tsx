import React from 'react';
import styled from 'styled-components';
import {GetStaticProps} from 'next';
import {REVALIDATE_TIME} from '../constants/main';
import {DigestType, FilterType, EventType} from '../interfaces';

import Layout from '../components/Layout/Layout';
import {getDigestList} from '../lib/digests';
import {getPastEventList, getUpcomingEventList} from '../lib/events';
import {ErrorsContainer} from '../components/Blocks';

const Wrapper = styled.div`
  display: flex;
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