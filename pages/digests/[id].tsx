import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const Digest = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Digest id: {id}</h1>
    </Layout>
  );
};

export default Digest;
