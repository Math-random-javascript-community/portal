import Link from 'next/link';
import { Props } from '../../types';

export default function Auth(props: Props): JSX.Element {

  return (
    <div>
      <Link href="/register">Register</Link>
      <Link href="/auth">Login</Link>
    </div>
  );
}
