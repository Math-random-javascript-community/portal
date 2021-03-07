import {Image} from './Image';
import {SpeakerProps} from './Image.interfaces';

export function Speaker(props: SpeakerProps) {
  return (
    <Image {...props} width={162} height={162} radius={81}/>
  );
}
