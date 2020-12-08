import React from 'react';
import {REVALIDATE_TIME} from '../constants/main';
import {Digest, Filter} from '../interfaces/index';

import Layout from '../components/Layout/Layout';
import {DigestsListComponent} from '../components/Digests';
import {getDigestList} from '../lib/digests';

type Props = {
  itemsList: Digest[]
  filtersList: Filter[]
  errors: string
}


export default function Home(propsData: Props) {
  return (
    <Layout home={true} propsData={propsData}>
      <DigestsListComponent digestsListData={propsData.itemsList} errors={propsData.errors}/>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const digestData = await getDigestList(3);
    const filtersListData = [
      {
        id: 1,
        'title': 'VUE',
      },
      {
        id: 2,
        'title': 'EXPRESS',
      },
      {
        id: 3,
        'title': 'PHP',
      },
      {
        id: 4,
        'title': 'JAVA',
      }
    ];

    
    return {
      props: {
        itemsList: digestData ? digestData : [],
        filtersList: filtersListData
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
