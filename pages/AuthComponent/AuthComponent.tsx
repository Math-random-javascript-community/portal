import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Auth } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';
import { SignUp } from './SignUp/SignUp';
import { ConfirmSignUp } from './ConfirmSignUp/ConfirmSignUp';
import { SignIn } from './SignIn/SignIn';
import AuthMenu from './AuthMenu/AuthMenu';

enum AuthFormType {
  AUTH_MENU = 'auth-menu',
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
  formType: AuthFormType.AUTH_MENU
};

export function AuthComponent(): JSX.Element {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  // const params = {
  //   UserAttributeNames: [
  //     'Account status',
  //   ],
  //   UserPoolId: 'portala79fbe9f_userpool_a79fbe9f-dev',
  //   Username: 'test2'
  // };
  // const poolData: CognitoIdentityServiceProvider.Types.AdminGetUserRequest = {
  //   UserPoolId: 'eu-west-1_5ac6FPAWv',
  //   Username: 'test2',
  // };
  // AWS.config.region = awsmobile.aws_cognito_region;
  // const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
  //
  // cognitoidentityserviceprovider.adminGetUser(poolData, function(err, data) {
  //   if (err) console.log(err, err.stack); // an error occurred
  //   else console.log(data);           // successful response
  // });

  // const params = {
  //   UserAttributes: [ /* required */
  //     {
  //       Name: 'custom:skills', /* required */
  //       Value: 'javascript'
  //     },
  //     /* more items */
  //   ],
  //   UserPoolId: 'eu-west-1_5ac6FPAWv', /* required */
  //   Username: 'test2', /* required */
  // };
  //
  // cognitoidentityserviceprovider.adminUpdateUserAttributes(params, function(err, data) {
  //   if (err) console.log(err, err.stack); // an error occurred
  //   else     console.log(data);           // successful response
  // });

  const setAuthListener = async (): Promise<void> => {
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

  const checkUser = async (): Promise<void> => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: AuthFormType.SIGNED_IN }));
    } catch (err) {
      updateUser(null);
    }
  };

  const onChange = (event: BaseSyntheticEvent): void => {
    event.persist();
    updateFormState(() => ({ ...formState, [event.target.name]: event.target.value }));
  };

  const signUp = async (): Promise<void> => {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({ ...formState, formType: AuthFormType.CONFIRM_SIGN_UP }));
  };

  const confirmSignUp = async (): Promise<void> => {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: AuthFormType.SIGN_IN }));
  };

  const signIn = async (): Promise<void> => {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: AuthFormType.SIGNED_IN }));
  };

  const openSignUpForm = () => {
    updateFormState(() => ({
      ...formState,
      formType: AuthFormType.SIGN_UP
    }));
  };

  const openSignInForm = () => {
    updateFormState(() => ({
      ...formState,
      formType: AuthFormType.SIGN_IN
    }));
  };

  const { formType } = formState;

  switch (formType) {
    case AuthFormType.AUTH_MENU: {
      return <AuthMenu openSignUpForm={openSignUpForm} openSignInForm={openSignInForm} />;
    }
    case AuthFormType.SIGN_UP: {
      return <SignUp handleOnChange={onChange} signUp={signUp} />;
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
