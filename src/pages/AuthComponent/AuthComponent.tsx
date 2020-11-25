import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Auth } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';
import { SignUp } from './SignUp/SignUp';
import { ConfirmSignUp } from './ConfirmSignUp/ConfirmSignUp';
import { SignIn } from './SignIn/SignIn';

enum AuthFormType {
  SIGN_UP = 'signUp',
  CONFIRM_SIGN_UP = 'confirmSignUp',
  SIGN_IN = 'signIn',
  SIGNED_IN = 'signedIn'
}

interface InitialFormState {
  username: string;
  password: string;
  email: string;
  authCode: string;
  formType: AuthFormType;
}

const initialFormState: InitialFormState = {
  username: '',
  password: '',
  email: '',
  authCode: '',
  formType: AuthFormType.SIGN_UP
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
          updateFormState(() => ({ ...formState, formType: AuthFormType.SIGN_UP }));
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
      updateFormState(() => ({ ...formState, formType: AuthFormType.SIGNED_IN }));
    } catch (err) {
      updateUser(null);
    }
  };

  const onChange = (event: BaseSyntheticEvent) => {
    event.persist();
    updateFormState(() => ({ ...formState, [event.target.name]: event.target.value }));
  };

  const signUp = async () => {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({ ...formState, formType: AuthFormType.CONFIRM_SIGN_UP }));
  };

  const confirmSignUp = async () => {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: AuthFormType.SIGN_IN }));
  };

  const signIn = async () => {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: AuthFormType.SIGNED_IN }));
  };

  const openSignInForm = () => {
    updateFormState(() => ({
      ...formState,
      formType: AuthFormType.SIGN_IN
    }));
  };

  const { formType } = formState;

  switch (formType) {
    case AuthFormType.SIGN_UP: {
      return <SignUp handleOnChange={onChange} signUp={signUp} openSignInForm={openSignInForm} />;
    }
    case AuthFormType.CONFIRM_SIGN_UP: {
      return <ConfirmSignUp handleOnChange={onChange} confirmSignUp={confirmSignUp} />;
    }
    case AuthFormType.SIGN_IN: {
      return <SignIn handleOnChange={onChange} signIn={signIn} />;
    }
    case AuthFormType.SIGNED_IN: {
      return (
        <div>
          <h1>Hello world, welcome user!</h1>
          <button onClick={() => Auth.signOut()}>Sign Out</button>
        </div>
      );
    }
    default:
      return null;
  }
}
