import {parseISO, format} from 'date-fns';

export default function EventDate({dateString}: { dateString: string }) {
  if (!dateString) {
    return <></>;
  }
  const date = parseISO(dateString, {additionalDigits: 2});
  const formatDate = (date.getDay() === (new Date()).getDay() ? ' \'Today\'' : 'LLLL d')
    + (date.getFullYear() === (new Date()).getFullYear() ? '' : ', yyyy');
    
  return <time dateTime={dateString}>{format(date, formatDate)}</time>;
}