import React from 'react';
import {useRouter} from 'next/router';
import {REVALIDATE_TIME} from '../../constants/main';
import {DigestType} from '../../interfaces';
import Layout from '../../components/Layout/Layout';
import {ErrorsContainer, Loading} from '../../components/Blocks';
import {getDigest} from '../../lib/digests';
import {Digest} from '../../components/Digests';
import DigestProvider from '../../components/Digests/DigestItemProvider';

type PropsType = {
  itemData: DigestType
  errors: string
}

export default function DigestRow ({itemData, errors}: PropsType) {
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
      <DigestProvider data={itemData}>
        <Digest/>
      </DigestProvider>
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

interface staticPropsParams {
  params: {
    id: number;
  }
}
export async function getStaticProps({params}: staticPropsParams) {
  try {
    const digestData = await getDigest(params.id);

    return {
      props: {
        itemData: digestData ?? {}
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
