import Layout from '../../components/Layout/Layout';
import {getDigest} from '../../lib/digests';
import DigestItem from '../../components/Digests/DigestItem';
import {Digest} from '../../interfaces';
import React from 'react';
import {useRouter} from 'next/router';
import {REVALIDATE_TIME} from '../../constants/main';

type Props = {
    item: Digest
    errors: string
}


export default function DigestRow({item, errors}: Props) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  if (errors) {
    return (
      <Layout>
        <p>
          <span style={{color: 'red'}}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }
  return (
    <Layout>
      {item && <DigestItem itemData={item} />}
    </Layout>
  );
}

export async function getStaticPaths() {
  // const paths = getAllPostIds();

  return {
    //paths,
    paths: [{params: {id: '123'}}],
    fallback: true
  };
}

export async function getStaticProps({params}) {
  try {
    const digestData = await getDigest(params.id);
    
    
    return {
      props: {
        item: digestData ? digestData : []
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