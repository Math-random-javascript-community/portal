import { Avatar } from './Avatar';
import { AvatarBigProps } from './Avatar.interfaces';

export function AvatarBig(props: AvatarBigProps) {
  return <Avatar {...props} width={300} height={300} />;
}
