import { BaseSyntheticEvent } from 'react';

interface ISignUpProps {
  handleOnChange: (event: BaseSyntheticEvent) => void;
  signUp: () => void;
}

export function SignUp(props: ISignUpProps): JSX.Element {
  const { handleOnChange, signUp } = props;
  return (
    <div>
      <input type="text" name="username" onChange={handleOnChange} placeholder="username" />
      <input type="password" name="password" onChange={handleOnChange} placeholder="password" />
      <input type="text" name="email" onChange={handleOnChange} placeholder="email" />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}
