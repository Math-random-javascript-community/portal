import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import { REVALIDATE_TIME } from '../../constants/main';
import { DigestsList, DigestSubscribe } from '../../components/Digests';
import { getDigestList } from '../../lib/digests';
import { DigestType } from '../../interfaces';
import { Loading } from '../../components/common/Loading';

interface PropsType {
  digestList: DigestType[];
  errors: string;
}

const ErrorsContainer = styled.div`
  color: ${({ theme }) => theme.errors.color};
  padding: 10px 20px;
  margin: 30px 0;
  background: ${({ theme }) => theme.errors.containerBackgroundColor};
  border: 1px solid ${({ theme }) => theme.errors.color};
  border-radius: 4px;
  text-align: center;
`;

export default function Digests({ digestList, errors }: PropsType) {
  const router = useRouter();

  let content = (
    <>
      <DigestSubscribe />
      <DigestsList data={digestList} errors={errors} />
    </>
  );

  if (router.isFallback) {
    content = <Loading />;
  }

  if (errors) {
    content = <ErrorsContainer>{errors}</ErrorsContainer>;
  }
  return <Layout>{content}</Layout>;
}

export async function getStaticProps() {
  try {
    const digestList = await getDigestList(10);
    return {
      props: {
        digestList: digestList ?? []
      },
      revalidate: REVALIDATE_TIME
    };
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    };
  }
}
