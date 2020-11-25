import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Auth } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';
import { SignUp } from './SignUp/SignUp';

const initialFormState = {
  username: '',
  password: '',
  email: '',
  authCode: '',
  formType: 'signUp'
};

export function AuthComponent(): JSX.Element {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  const setAuthListener = async () => {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signOut': {
          updateFormState(() => ({ ...formState, formType: 'signUp' }));
          break;
        }
        default:
          break;
      }
    });
  };

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: 'signedIn' }));
    } catch (err) {
      updateUser(null);
    }
  };

  const onChange = (event: BaseSyntheticEvent) => {
    event.persist();
    updateFormState(() => ({ ...formState, [event.target.name]: event.target.value }));
  };

  const { formType } = formState;

  const signUp = async () => {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({ ...formState, formType: 'confirmSignUp' }));
  };

  const confirmSignUp = async () => {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: 'signIn' }));
  };

  const signIn = async () => {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: 'signedIn' }));
  };

  const openSignInForm = () => {
    updateFormState(() => ({
      ...formState,
      formType: 'signIn'
    }));
  };

  return (
    <>
      {formType === 'signUp' && (
        <SignUp handleOnChange={onChange} signUp={signUp} openSignInForm={openSignInForm} />
      )}
      {formType === 'confirmSignUp' && (
        <div>
          <input type="text" name="authCode" onChange={onChange} placeholder="Confirmation code" />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      )}
      {formType === 'signIn' && (
        <div>
          <input type="text" name="username" onChange={onChange} placeholder="username" />
          <input type="password" name="password" onChange={onChange} placeholder="password" />
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
      {formType === 'signedIn' && (
        <div>
          <h1>Hello world, welcome user!</h1>
          <button onClick={() => Auth.signOut()}>Sign Out</button>
        </div>
      )}
    </>
  );
}
