import styled from 'styled-components';
import { Tag } from '../Tag';
import { TagsListProps } from './TagListProps';

const StyledTagsList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const TagsList = ({ tags = [], color }: TagsListProps) => {
  return (
    <StyledTagsList>
      {tags.map((tagText, index) => <Tag key={index} color={color}>{tagText}</Tag>)}
    </StyledTagsList>
  );
};
