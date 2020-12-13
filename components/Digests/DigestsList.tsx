import React from 'react';
import { Digest } from '../../interfaces';
import DigestItem from './DigestItem';

type Props = {
    digestsListData: Digest[],
    errors: string
}

const DigestList = ({ digestsListData, errors}: Props) => (
  <>
    {errors &&  (  <p>  <span style={{color: 'red'}}>Error:</span> {errors} </p>  )}
    
    <h2>Digests List</h2>
    {digestsListData && digestsListData.map((row) => (
      <div key={row.Id}>
        <DigestItem itemData={row} isLinked={true} /> 
      </div>
    ))}
  </>
);


export default DigestList;