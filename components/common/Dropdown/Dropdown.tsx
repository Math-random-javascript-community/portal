import styled from 'styled-components';
import { DropdownProps, SelectorItem } from './Dropdown.interfaces';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const Title = styled.div`
  color:${({ theme, color }) => color || theme.dropdown.activeColor};
  font-size: 14px;
`;

const Selector = styled.div`
  display: block;
  font-size: 16px;
  position: relative;
  margin-right: auto;

  select {
    margin-top: 5px;
    min-width: 200px;
    background: ${({ theme }) => theme.dropdown.backgroundColor};
    padding: 5px 45px 5px 10px;
    color: ${({ theme, color }) => color || theme.dropdown.activeColor};
    border: 1px solid ${({ theme }) => theme.dropdown.borderColor};
    border-radius: 4px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="${({ theme, color }) => color || theme.dropdown.activeColor}" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.59509 3.42424C0.931602 2.94524 1.55514 2.85894 1.98779 3.2315L5.95764 6.50925L9.78418 3.2315C10.2168 2.85894 10.8404 2.94524 11.1769 3.42424C11.5134 3.90324 11.4355 4.59357 11.0028 4.96613L6.56695 8.76855C6.20856 9.07715 5.70672 9.07715 5.34833 8.76855L0.769178 4.96613C0.336521 4.59357 0.258579 3.90324 0.59509 3.42424Z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 8px center;
  }
 
  select::-ms-expand {
    display: none;
  }

  &:hover {
    opacity: 0.95;
  }

  &:active {
    opacity: 0.9;
  }

  &:focus {
    outline: 0;
  }
`;

export function Dropdown({ items, defaultVal, label, color, ...props }: DropdownProps) {

  return (
    <Wrapper>
      {!label || (<Title color={color}>{label}</Title>)}
      <Selector color={color}>
        <select defaultValue={defaultVal} {...props}>
          {items.map((item: SelectorItem, i: number) => (
            <option key={i.toString()} value={item.val}>{item.label}</option>
          ))}
        </select>
      </Selector>
    </Wrapper>
  );
}
