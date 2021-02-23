import Layout from '../../components/Layout/Layout';
import {ErrorsContainer, Loading} from '../../components/Blocks';
import {getEvent} from '../../lib/events';
import {Event} from '../../components/Events';
import {EventType} from '../../interfaces';
import React from 'react';
import {useRouter} from 'next/router';
import {REVALIDATE_TIME} from '../../constants/main';
import EventItemProvider from '../../components/Events/EventItemProvider';

type PropsType = {
  itemData: EventType
  errors: string
}

export default function EventRow({itemData, errors}: PropsType) {
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
      <EventItemProvider data={itemData}>
        <Event/>
      </EventItemProvider>
    </Layout>
  );
}

export async function getStaticPaths() {
  // const paths = getAllPostIds();

  return {
    paths: [{params: {id: '1'}}],
    fallback: true
  };
}

export async function getStaticProps({params}) {
  try {
    const eventData = await getEvent(params.id);
    
    return {
      props: {
        itemData: eventData ?? {}
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