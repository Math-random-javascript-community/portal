import { Amplify } from 'aws-amplify';
import config from '../aws-exports';
import { AuthComponent } from './AuthComponent/AuthComponent';
import Auth from './auth';

Amplify.configure(config);

export default function Home(): JSX.Element {
  return (
    <>
      <AuthComponent />
      <Auth />
    </>
  );
}
