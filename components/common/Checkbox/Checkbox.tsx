import styled from 'styled-components';
import {ChangeEvent, useState} from 'react';
import {CheckboxProps} from './Checkbox.interface';
import {Icon, IconSizes, IconTypes} from '../Icon';

interface StyledLabelProps {
  theme: string;
  checked?: boolean
}

const Text = styled.div`
  margin-left: 5px;
  font-size: 14px;
`;

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({theme, checked}) => checked ? theme.checkbox.activeColor : theme.checkbox.defaultColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-start;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Checkbox = ({label, className, checked, ...props}: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target?.checked);
  };

  return (
    <CheckboxContainer className={className}>
      <StyledLabel checked={isChecked}>
        <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} {...props} />
        <Icon iconType={isChecked ? IconTypes.Checked : IconTypes.Check} isActive={isChecked} size={IconSizes.ExtraSmall}/>
        <Text>{label}</Text>
      </StyledLabel>
    </CheckboxContainer>
  );
};
