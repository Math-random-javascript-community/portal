import React from 'react';
import Link from 'next/link';
import {Digest} from '../../interfaces';
import DigestDate from '../Blocks/DigestDate';

type itemProps = {
    itemData: Digest
    isLinked?: boolean
}

const DigestItem = ({itemData, isLinked}: itemProps) => (
  <>
    <div><h3>DigestItem</h3>
      {isLinked && (
        <Link href="/digests/[Id]" as={`/digests/${itemData.Id}`}>
          <a>
            <span> Digest #{itemData.Id} </span>
            
            <small>
              <DigestDate dateString={itemData.digest_date}/>
            </small>
            
            <div dangerouslySetInnerHTML={{__html: itemData.description}}/>
          </a>
        </Link>
      )}
      {!isLinked && (
        <div>
          <span> Digest #{itemData.Id} </span>

          <small>
            <DigestDate dateString={itemData.digest_date}/>
          </small>

          <div dangerouslySetInnerHTML={{__html: itemData.description}}/>
        </div>
      )}      
    </div>
  </>
);

export default DigestItem;