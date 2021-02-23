import React from 'react';
import styled from 'styled-components';
import {DigestType, PostType} from '../../interfaces';
import {useDigest} from './DigestItemProvider';
import DigestDate from '../Blocks/DigestDate';

const Wrapper = styled.div`
  margin-top: 30px;
`;
const Title = styled.div`
  color: #ffe400;
`;
const DateWrapper = styled.div`
  margin-top: 10px;
  color: #064AFF;
`;
const Content = styled.div`
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
`;
const PostWrapper = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

/**
 * Sort Post items by date
 *
 * @param posts
 */
export const sortPosts = (posts: PostType[]) =>
  posts.sort(function (a, b) {
    if (a.post_date > b.post_date) {
      return 1;
    }
    if (a.post_date < b.post_date) {
      return -1;
    }
    return 0;
  });

const Digest = () => {
  const item: DigestType = useDigest();

  return (
    <Wrapper>
      <Title>{item.title}</Title>
      {item.posts && sortPosts(item.posts).map((row: PostType) => (
        <PostWrapper key={row.id}>
          <DateWrapper><DigestDate dateString={row.post_date}/></DateWrapper>
          <Content> {row.content}</Content>
        </PostWrapper>
      ))
      ||
      (<>No such Digest</>)}
    </Wrapper>
  );
};

export default Digest;