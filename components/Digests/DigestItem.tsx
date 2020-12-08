import React from 'react';
import Link from 'next/link';
import {Digest} from '../../interfaces';
import EventDate from '../Blocks/EventDate';

type itemProps = {
    itemData: Digest
    isLinked?: boolean
}

const DigestItem = ({itemData, isLinked}: itemProps) => (
  <>
    <div><h3>DigestItem</h3>
      {isLinked && (
        <Link href="/digests/[id]" as={`/digests/${itemData.id}`}>
          <a>
            <span> Digest #{itemData.id} </span>
            
            <small>
              <EventDate dateString={itemData.date}/>
            </small>
            
            <div dangerouslySetInnerHTML={{__html: itemData.content}}/>
          </a>
        </Link>
      )}
      {!isLinked && (
        <div>
          <span> Digest #{itemData.id} </span>

          <small>
            <EventDate dateString={itemData.date}/>
          </small>

          <div dangerouslySetInnerHTML={{__html: itemData.content}}/>
        </div>
      )}      
    </div>
  </>
);

export default DigestItem;