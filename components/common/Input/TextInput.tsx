import { FC } from 'react';
import styled from 'styled-components';
import { StyledTextInputProps, TextInputProps } from './TextInput.interface';

const StyledTextInput = styled.input<StyledTextInputProps>`
  border: 1px solid ${({ theme }) => theme.textInput.defaultBorderColor};
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.textInput.defaultBackground};
  color: ${({ theme }) => theme.textInput.defaultColor};
  font-size: 16px;

  &:hover {
    opacity: 0.95;
  }

  &:focus {
    outline: 0;
  }
`;

const StyledTextInputWithError = styled(StyledTextInput)`
  border-color: ${({ theme }) => theme.textInput.errorBorderColor};
`;

const ValidStyledTextInput = styled(StyledTextInput)`
  border-color: ${({ theme }) => theme.textInput.validBorderColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.text.defaultColor};
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
  color: ${({ theme }) => theme.textInput.requiredSignColor};
`;

const Label = styled.label``;

const LabelTextContainer = styled(SmallText)`
  display: block;
  margin-bottom: 8px;
`;

const BottomTextContainer = styled(PreTitleText)`
  margin-top: 16px;
  color: ${({ theme }) => theme.textInput.bottomTextColor};
`;

const ErrorTextContainer = styled(BottomTextContainer)`
  color: ${({ theme }) => theme.textInput.errorTextColor};
`;

export const TextInput: FC<TextInputProps> = ({
  label,
  isRequired,
  bottomText,
  hasError,
  hasValidValue,
  requiredMessage,
  ...props
}: TextInputProps) => (
  <Container>
    <Label>
      {label && (
        <LabelTextContainer>
          {label}
          {isRequired && <RequiredSignText>*</RequiredSignText>}
        </LabelTextContainer>
      )}
      {hasError && <StyledTextInputWithError {...props} />}
      {!hasError && hasValidValue && <ValidStyledTextInput {...props} />}
      {!hasError && !hasValidValue && <StyledTextInput {...props} />}
    </Label>
    {bottomText && <BottomTextContainer>{bottomText}</BottomTextContainer>}
    {hasError && isRequired && requiredMessage && (
      <ErrorTextContainer>{requiredMessage}</ErrorTextContainer>
    )}
  </Container>
);

TextInput.defaultProps = {
  label: '',
  isRequired: false,
  bottomText: '',
  hasError: false,
  hasValidValue: false,
  requiredMessage: ''
};
