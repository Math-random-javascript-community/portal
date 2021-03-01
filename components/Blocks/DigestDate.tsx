import {parseISO, format} from 'date-fns';

export default function DigestDate({dateString}: { dateString: string }) {
  if (!dateString) {
    return <></>;
  }
  const date = parseISO(dateString);
  const formatDate = (date.getDay() === (new Date()).getDay() ? ' \'Today\'' : ' LLL d')
    + (date.getFullYear() === (new Date()).getFullYear() ? '' : ', yyyy');

  return <time dateTime={dateString}>{format(date, formatDate)}</time>;
}