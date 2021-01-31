import Link from 'next/link';

export default function Auth(props: any): JSX.Element {

  return (
    <div>
      <Link href="/auth">Register</Link>
      <Link href="/auth">Login</Link>
    </div>
  );
}
