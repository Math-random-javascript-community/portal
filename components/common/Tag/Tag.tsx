import styled from 'styled-components';
import { TagProps } from './TagProps';

type StyledTagProps = {
  color?: string;
};

const StyledTag = styled.span<StyledTagProps>`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 0 17px 10px 0;
    color: ${({ theme, color }) => color ? color : theme.tag.defaultColor};
    border: 1px solid ${({ theme, color }) => color ? color : theme.tag.defaultColor};;
    box-sizing: border-box;
    border-radius: 16px;
    font-size: 10px;
`;

export const Tag = ({ children, color }: TagProps) => (
  <StyledTag color={color}>{children}</StyledTag>
);
