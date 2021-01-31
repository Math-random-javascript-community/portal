import React, { FC, InputHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {};

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  height: 40px;
  background-color: #333333;
  color: #ffffff;
  font-size: 16px;

  &:hover {
    opacity: 0.95;
  }

  &:focus {
    outline: 0;
  }
`;

const StyledInputWithError = styled(StyledInput)`
  border-color: #FF3F06;
`;

const ValidStyledInput = styled(StyledInput)`
  border-color: #06FFBB;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: white;
`;

const SmallText = styled(Text)`
  font-size: 14px;
  line-height: 16px;
`;

const PreTitleText = styled(Text)`
  font-size: 10px;
  font-weight: 700;
  line-height: 11px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const RequiredSignText = styled.span`
  color: #FF3F06;
`;

const Label = styled.label``;

const LabelTextContainer = styled(SmallText)`
  display: block;
  margin-bottom: 8px;
`;

const BottomTextContainer = styled(PreTitleText)`
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

const ErrorTextContainer = styled(BottomTextContainer)`
  color: #FF3F06;
`;

export interface TextInputProps extends StyledInputProps {
  value: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  bottomText?: string;
  hasError?: boolean;
  hasValidValue?: boolean;
  requiredMessage?: string;
};

export const TextInput: FC<TextInputProps> = ({ label, isRequired, bottomText, hasError, hasValidValue, requiredMessage, ...props }) => (
  <Container>
    <Label>
      {label && (
        <LabelTextContainer>
          {label}{isRequired && <RequiredSignText>*</RequiredSignText>}
        </LabelTextContainer>
      )}
      {hasError && <StyledInputWithError {...props} />}
      {!hasError && hasValidValue && <ValidStyledInput {...props} />}
      {!hasError && !hasValidValue && <StyledInput {...props} />}
    </Label>
    {bottomText && (
      <BottomTextContainer>
        {bottomText}
      </BottomTextContainer>
    )}
    {hasError && isRequired && requiredMessage && (
      <ErrorTextContainer>
        {requiredMessage}
      </ErrorTextContainer>
    )}
  </Container>
);

TextInput.defaultProps = {
  label: '',
  isRequired: false,
  bottomText: '',
  hasError: false,
  hasValidValue: false,
  requiredMessage: '',
};
