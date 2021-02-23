import Layout from '../../components/Layout/Layout';
import styled from 'styled-components';
import {ErrorsContainer, Loading} from '../../components/Blocks';
import {getDigestList} from '../../lib/digests';
import {DigestType} from '../../interfaces';
import React from 'react';
import {useRouter} from 'next/router';
import {REVALIDATE_TIME} from '../../constants/main';
import {DigestsList} from '../../components/Digests';
import {Title} from '../../components/Blocks';

const StyledTitle = styled(Title)`
  margin-top: 20px;
`;

type PropsType = {
  digestList: DigestType[]
  errors: string
}

export default function DigestRow({digestList, errors}: PropsType) {
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
      <StyledTitle>All Digests</StyledTitle>
      <DigestsList data={digestList} errors={errors}/>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const digestList = await getDigestList(10);

    return {
      props: {
        digestList: digestList ?? [],
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