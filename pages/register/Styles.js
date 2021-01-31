import styled from 'styled-components';

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 540px;
  padding: 32px;
  margin: auto;
  background: #333333;
  border: 1px solid black;
  color: white;
`;

export const HeadText = styled.h1`
  display: flex;
  margin: auto;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
`;

export const Label = styled.label`
  line-height: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 8px;
`;

export const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
`;

export const Select = styled.select`
  padding: 8px;
  margin-top: 8px;
`;

export const Button = styled.button`
  display: flex;
  margin: 32px auto 0;
  background: #ffe400;
  border-radius: 4px;
  border: none;
  padding: 16px 96px;
`;
