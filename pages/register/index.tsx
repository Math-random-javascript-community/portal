import { BaseSyntheticEvent } from 'react';
import {
  InputSection,
  Label,
  Input,
  RegistrationForm,
  Select,
  SelectSection,
  Button, HeadText
} from './Styles';

export default function Register(props: any): JSX.Element {
  const sendForm = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log('send form');
  };

  return (
    <RegistrationForm onSubmit={sendForm}>
      <HeadText>Registration form</HeadText>

      <InputSection>
        <Label htmlFor={'email'}>Email*</Label>
        <Input type="text" id="email" placeholder={'Your email'} />
      </InputSection>

      <InputSection>
        <Label htmlFor={'name'}>Name*</Label>
        <Input type="text" id="name" placeholder={'Your Full Name'} />
      </InputSection>

      <InputSection>
        <Label htmlFor={'surname'}>Surname*</Label>
        <Input type="text" id="surname" placeholder={'Your surname'} />
      </InputSection>

      <InputSection>
        <Label htmlFor={'title'}>Title*</Label>
        <Input type="text" id="title" placeholder={'e.g. Software Engineer, Lead Developer'} />
      </InputSection>

      <InputSection>
        <Label htmlFor={'company'}>Company*</Label>
        <Input type="text" id="company" placeholder={'Your company'} />
      </InputSection>

      <InputSection>
        <Label htmlFor={'city'}>City*</Label>
        <Input type="text" id="city" placeholder={'Your city'} />
      </InputSection>

      <SelectSection>
        <Label htmlFor={'skills*'}>Professional Skills*</Label>
        <Select name="skills" id="skills">
          <option value="javascript">JavaScript</option>
        </Select>
      </SelectSection>

      <SelectSection>
        <Label htmlFor={'level*'}>Technical level*</Label>
        <Select name="level" id="level">
          <option value="javascript">Student</option>
        </Select>
      </SelectSection>

      <Button type={'submit'}>Save</Button>
    </RegistrationForm>
  );
}
