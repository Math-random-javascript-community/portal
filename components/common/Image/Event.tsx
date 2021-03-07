import {Image} from './Image';
import {EventImageProps} from './Image.interfaces';

export function Event(props: EventImageProps) {
  return (
    <Image {...props} width={(props.isWide ? 0 : 214)} height={202} isWide={props.isWide}/>
  );
}
