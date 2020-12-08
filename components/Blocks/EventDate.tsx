import {parseISO, format} from 'date-fns';

export default function EventDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  const formatDate = (date.getDay() === (new Date()).getDay() ? ' \'Today\' HH:mm': 'HH:mm LLL d')
        + (date.getFullYear() === (new Date()).getFullYear() ? '' : ', yyyy');

  return <time dateTime={dateString}>{format(date, formatDate)}</time>;}