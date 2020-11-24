import { useEffect, useState } from 'react';
import { Auth } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';

const initialFormState = {
  username: '',
  password: '',
  email: '',
  authCode: '',
  formType: 'signUp'
};

export function AuthComponent() {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  async function setAuthListener() {
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
  }

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: 'signedIn' }));
    } catch (err) {
      updateUser(null);
    }
  }

  function onChange(e) {
    e.persist();
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const { formType } = formState;

  async function signUp() {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({ ...formState, formType: 'confirmSignUp' }));
  }

  async function confirmSignUp() {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: 'signIn' }));
  }

  async function signIn() {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: 'signedIn' }));
  }

  return (
    <>
      {formType === 'signUp' && (
        <div>
          <input type="text" name="username" onChange={onChange} placeholder="username" />
          <input type="password" name="password" onChange={onChange} placeholder="password" />
          <input type="text" name="email" onChange={onChange} placeholder="email" />
          <button onClick={signUp}>Sign Up</button>
          <button
            onClick={() =>
              updateFormState(() => ({
                ...formState,
                formType: 'signIn'
              }))
            }
          >
            Sign In
          </button>
        </div>
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
