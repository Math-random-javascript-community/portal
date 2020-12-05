import { BaseSyntheticEvent } from 'react';

interface IConfirmSignUpProps {
  handleOnChange: (event: BaseSyntheticEvent) => void;
  confirmSignUp: () => void;
}

export function ConfirmSignUp(props: IConfirmSignUpProps): JSX.Element {
  const { handleOnChange, confirmSignUp } = props;
  return (
    <div>
      <input type="text" name="authCode" onChange={handleOnChange} placeholder="Confirmation code" />
      <button onClick={confirmSignUp}>Confirm Sign Up</button>
    </div>
  );
}
