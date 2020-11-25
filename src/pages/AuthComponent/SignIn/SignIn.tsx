import { BaseSyntheticEvent } from 'react';

interface ISignInProps {
  handleOnChange: (event: BaseSyntheticEvent) => void;
  signIn: () => void;
}

export function SignIn(props: ISignInProps): JSX.Element {
  const { handleOnChange, signIn } = props;
  return (
    <div>
      <input type="text" name="username" onChange={handleOnChange} placeholder="username" />
      <input type="password" name="password" onChange={handleOnChange} placeholder="password" />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
