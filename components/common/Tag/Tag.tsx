import styled from 'styled-components';

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
    color: ${(props) => props.color ? props.color : '#06FFBB'};
    border: 1px solid ${(props) => props.color ? props.color : '#06FFBB'};
    box-sizing: border-box;
    border-radius: 16px;
    font-size: 10px;
`;

export type TagProps = {
  children: string,
  color?: string
}

export const Tag = ({children, color}: TagProps) => (
  <StyledTag color={color}>{children}</StyledTag>
);
