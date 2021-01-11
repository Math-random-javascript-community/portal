import Layout from '../../components/Layout/Layout';
import {ErrorsContainer, Loading} from '../../components/Blocks';
import {getPastEventList} from '../../lib/events';
import {EventType} from '../../interfaces';
import React from 'react';
import {useRouter} from 'next/router';
import {REVALIDATE_TIME} from '../../constants/main';
import {EventsList} from '../../components/Events';
import {Title} from '../../components/Blocks';

type PropsType = {
  eventList: EventType[]
  errors: string
}

export default function EventRow({eventList, errors}: PropsType) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <Loading/>
      </Layout>
    );
  }
  if (errors) {
    return (
      <Layout>
        <ErrorsContainer>
          {errors}
        </ErrorsContainer>
      </Layout>
    );
  }
  return (
    <Layout>
      <Title>Past events</Title>
      <EventsList type={'past'} data={eventList} errors={errors}/>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const eventList = await getPastEventList(10);

    return {
      props: {
        eventList: eventList ?? [],
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
}