import { BaseSyntheticEvent } from 'react';

interface ISignUpProps {
  handleOnChange: (event: BaseSyntheticEvent) => void;
  signUp: () => void;
  openSignInForm: () => void;
}

export function SignUp(props: ISignUpProps): JSX.Element {
  const { handleOnChange, signUp, openSignInForm } = props;
  return (
    <div>
      <input type="text" name="username" onChange={handleOnChange} placeholder="username" />
      <input type="password" name="password" onChange={handleOnChange} placeholder="password" />
      <input type="text" name="email" onChange={handleOnChange} placeholder="email" />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={openSignInForm}>Sign In</button>
    </div>
  );
}
