interface IAuthMenuProps {
  openSignUpForm: () => void;
  openSignInForm: () => void;
}

export default function AuthMenu(props: IAuthMenuProps): JSX.Element {
  const { openSignUpForm, openSignInForm } = props;
  return (
    <>
      <button onClick={openSignUpForm}>Sign up</button>
      <button onClick={openSignInForm}>Sign in</button>
    </>
  );
}
